# 💡 LumiCall — Video Call Web App with Auto Ring Light

This is the client-side of the LumiCall video call web application. It is built using React and provides a user-friendly interface for video calls with an auto ring light feature.

---

## Project Structure

```
client/
├── public/
│   ├── index.html          ← Main HTML file for the React app
│   └── favicon.ico         ← Favicon for the web application
├── src/
│   ├── index.js            ← React entry point
│   ├── index.css           ← Global styles
│   ├── pages/
│   │   ├── HomePage.js     ← Component for creating/joining a room
│   │   └── CallPage.js     ← Component for the live video call interface
│   ├── components/
│   │   ├── VideoGrid.js     ← Displays video feeds of participants
│   │   ├── ControlPanel.js   ← Provides call controls (mute, camera, etc.)
│   │   └── ChatBox.js       ← Allows in-call text messaging
│   ├── hooks/
│   │   ├── useWebRTC.js     ← Manages WebRTC peer connections
│   │   └── useRingLight.js  ← Implements auto ring light functionality
│   └── styles/
│       ├── pages.css        ← Styles specific to pages
│       └── components.css    ← Styles specific to components
└── package.json             ← Client-side npm dependencies and scripts
```

---

## How to Run the Client

### Step 1 — Install Dependencies

Navigate to the client directory and install the required packages:

```bash
cd client
npm install
```

### Step 2 — Start the React App

Run the following command to start the development server:

```bash
npm start
# App opens on http://localhost:3000
```

### Step 3 — Access the Application

Open your browser and go to **http://localhost:3000** to start using the LumiCall video call app.

---

## Features

- ✅ Create a room and share the code — no accounts needed
- ✅ WebRTC peer-to-peer video (no video data goes through the server)
- ✅ Auto ring light — detects darkness and boosts screen brightness
- ✅ Mute / Camera off / Flip camera controls
- ✅ In-call text chat functionality
- ✅ Mobile browser compatibility (Chrome, Safari)
- ✅ Displays room code for easy sharing

---

## Contributing

If you would like to contribute to the LumiCall project, please fork the repository and submit a pull request. We welcome contributions that enhance the functionality and usability of the application.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.