import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const useWebRTC = (roomId) => {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStreams, setRemoteStreams] = useState([]);
    const socketRef = useRef();
    const peerRef = useRef({});
    const localVideoRef = useRef();

    useEffect(() => {
        socketRef.current = io('http://localhost:4000'); // Adjust the server URL as needed

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setLocalStream(stream);
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
            });

        socketRef.current.emit('join room', roomId);

        socketRef.current.on('user joined', userId => {
            const peerConnection = new RTCPeerConnection();
            peerRef.current[userId] = peerConnection;

            localStream.getTracks().forEach(track => {
                peerConnection.addTrack(track, localStream);
            });

            peerConnection.ontrack = ({ streams: [stream] }) => {
                setRemoteStreams(prev => [...prev, stream]);
            };

            peerConnection.onicecandidate = ({ candidate }) => {
                if (candidate) {
                    socketRef.current.emit('send candidate', { candidate, userId });
                }
            };

            // Create offer
            peerConnection.createOffer()
                .then(offer => {
                    return peerConnection.setLocalDescription(offer);
                })
                .then(() => {
                    socketRef.current.emit('send offer', { offer: peerConnection.localDescription, userId });
                });
        });

        socketRef.current.on('receive offer', ({ offer, userId }) => {
            const peerConnection = new RTCPeerConnection();
            peerRef.current[userId] = peerConnection;

            localStream.getTracks().forEach(track => {
                peerConnection.addTrack(track, localStream);
            });

            peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
                .then(() => {
                    return peerConnection.createAnswer();
                })
                .then(answer => {
                    return peerConnection.setLocalDescription(answer);
                })
                .then(() => {
                    socketRef.current.emit('send answer', { answer: peerConnection.localDescription, userId });
                });

            peerConnection.ontrack = ({ streams: [stream] }) => {
                setRemoteStreams(prev => [...prev, stream]);
            };

            peerConnection.onicecandidate = ({ candidate }) => {
                if (candidate) {
                    socketRef.current.emit('send candidate', { candidate, userId });
                }
            };
        });

        socketRef.current.on('receive answer', ({ answer, userId }) => {
            peerRef.current[userId].setRemoteDescription(new RTCSessionDescription(answer));
        });

        socketRef.current.on('receive candidate', ({ candidate, userId }) => {
            peerRef.current[userId].addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socketRef.current.disconnect();
            localStream.getTracks().forEach(track => track.stop());
        };
    }, [roomId, localStream]);

    return { localVideoRef, remoteStreams };
};

export default useWebRTC;