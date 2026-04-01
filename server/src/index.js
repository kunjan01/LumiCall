const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('./middleware/cors');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: config.allowedOrigins,
        methods: ['GET', 'POST'],
    },
});

app.use(cors);

// Serve React static files
const buildPath = path.join(__dirname, '../../../client/build');
app.use(express.static(buildPath));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Add your signaling logic here
    socket.on('joinRoom', (roomCode) => {
        socket.join(roomCode);
        socket.to(roomCode).emit('userJoined', socket.id);
    });

    socket.on('signal', (data) => {
        io.to(data.roomCode).emit('signal', {
            signal: data.signal,
            id: socket.id,
        });
    });
});

// Serve index.html for all other routes (for React SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

server.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});