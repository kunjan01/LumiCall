# LumiCall Server Documentation

## Overview

LumiCall is a video call web application that utilizes WebRTC for peer-to-peer communication and includes an auto ring light feature that adjusts screen brightness based on ambient light conditions. This README provides instructions for setting up and running the server component of the application.

## Project Structure

```
lumicall/
└── server/
    ├── src/
    │   ├── index.js          ← Entry point for the signaling server
    │   ├── config.js         ← Configuration settings
    │   └── middleware/
    │       └── cors.js       ← CORS middleware
    ├── package.json           ← NPM dependencies and scripts
    └── README.md              ← This documentation
```

## Prerequisites

- Node.js (version 14 or higher)
- NPM (Node Package Manager)

## Installation

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the signaling server, run the following command:

```bash
npm start
```

The server will be accessible at `http://localhost:4000`.

## Configuration

The server configuration can be found in `src/config.js`. You can modify the port number and other settings as needed.

## Middleware

The server uses CORS middleware located in `src/middleware/cors.js` to handle Cross-Origin Resource Sharing. This allows the client application to communicate with the server from different origins.

## Usage

Once the server is running, you can connect to it using the client application. Follow the instructions in the client README for setting up and running the client.

## Features

- Real-time communication using Socket.IO
- Peer-to-peer video calls with WebRTC
- Auto ring light functionality for improved video quality in low-light conditions

## License

This project is licensed under the MIT License. See the LICENSE file for details.