# Deployment Instructions for LumiCall

This document provides instructions for deploying the LumiCall video call web app with auto ring light functionality to the internet.

## Prerequisites

Before deploying, ensure you have the following:

- Node.js installed on your machine
- An account on a cloud platform (e.g., Railway, Vercel, Netlify)
- Basic knowledge of Git and command line usage

## Deployment Steps

### 1. Deploy the Signaling Server

You can deploy the signaling server using Railway, which is one of the easiest options.

#### Using Railway

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Initialize a Railway project:
   ```bash
   railway up
   ```

3. Note the generated URL for your server.

### 2. Build and Deploy the Client

After deploying the server, you need to build the client application and deploy it.

#### Build the Client

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Set the server URL as an environment variable and build the React app:
   ```bash
   REACT_APP_SERVER_URL=https://your-railway-url npm run build
   ```

#### Deploy the Build

You can deploy the `build` folder to platforms like Vercel or Netlify.

##### Using Vercel

1. Install Vercel CLI if you haven't already:
   ```bash
   npm install -g vercel
   ```

2. Deploy the build folder:
   ```bash
   vercel --prod
   ```

##### Using Netlify

1. Go to the Netlify website and create a new site.
2. Drag and drop the `build` folder into the deployment area.

### 3. Access Your Application

Once deployed, you can access your LumiCall application using the URL provided by your deployment platform. Share this URL with others to start video calls!

## Additional Notes

- Ensure that your server is running and accessible from the internet.
- If you encounter any issues, check the logs on your deployment platform for troubleshooting.

By following these steps, you should have your LumiCall video call web app up and running on the internet!