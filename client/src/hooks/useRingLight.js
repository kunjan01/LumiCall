import { useEffect, useState } from 'react';

const useRingLight = () => {
    const [isBright, setIsBright] = useState(true);

    useEffect(() => {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const checkBrightness = () => {
            context.drawImage(video, 0, 0, 48, 48);
            const imageData = context.getImageData(0, 0, 48, 48);
            const data = imageData.data;

            let totalBrightness = 0;
            for (let i = 0; i < data.length; i += 4) {
                const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
                totalBrightness += brightness;
            }

            const averageBrightness = totalBrightness / (data.length / 4);
            if (averageBrightness < 80) {
                setIsBright(false);
                document.body.style.backgroundColor = 'white'; // Example action to boost brightness
            } else {
                setIsBright(true);
                document.body.style.backgroundColor = ''; // Reset to normal
            }
        };

        const startVideo = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();

            setInterval(checkBrightness, 600);
        };

        startVideo();

        return () => {
            video.srcObject.getTracks().forEach(track => track.stop());
        };
    }, []);

    return isBright;
};

export default useRingLight;