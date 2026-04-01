# 💡 LumiCall — Video Call Web App with Auto Ring Light

A Google Meet-style video call web app built with:
- **React** (frontend UI)
- **Node.js + Socket.IO** (signaling server)
- **WebRTC** (peer-to-peer video, no server video relay needed)
- **Auto Ring Light** — detects dark room from your camera, auto-boosts screen brightness

---

## Project Structure

```
lumicall/
├── server/
│   ├── src/
│   │   ├── index.js          ← Signaling server (Node.js + Socket.IO)
│   │   ├── config.js         ← Configuration settings
│   │   └── middleware/
│   │       └── cors.js       ← CORS middleware
│   ├── package.json           ← Server dependencies and scripts
│   └── README.md              ← Server documentation
└── client/
    ├── public/
    │   ├── index.html         ← Main HTML file for React app
    │   └── favicon.ico        ← Favicon for the web application
    ├── src/
    │   ├── index.js           ← React entry point
    │   ├── index.css          ← Global styles
    │   ├── pages/
    │   │   ├── HomePage.js    ← Create / Join room
    │   │   └── CallPage.js     ← Live video call screen
    │   ├── components/
    │   │   ├── VideoGrid.js    ← Displays video feeds
    │   │   ├── ControlPanel.js  ← Controls for the call
    │   │   └── ChatBox.js      ← In-call text chat
    │   ├── hooks/
    │   │   ├── useWebRTC.js    ← WebRTC peer connection
    │   │   └── useRingLight.js  ← Auto ring light logic
    │   └── styles/
    │       ├── pages.css       ← Styles for pages
    │       └── components.css   ← Styles for components
    ├── package.json            ← Client dependencies and scripts
    └── README.md               ← Client documentation
├── docs/
│   └── DEPLOYMENT.md          ← Deployment instructions
└── README.md                  ← Overall project documentation
```

---

## How to Run

### Step 1 — Start the signaling server

```bash
cd server
npm install
npm start
# Server runs on http://localhost:4000
```

### Step 2 — Start the React app

```bash
cd client
npm install
npm start
# App opens on http://localhost:3000
```

### Step 3 — Make a call

1. Open **http://localhost:3000** in your browser
2. Enter your name → click **Create new room**
3. Share the **8-character room code** with your friend
4. Your friend opens the same URL, enters the code → **Join**
5. Video call starts! Go to a dark room to see the auto ring light activate 💡

---

## How Auto Ring Light Works

```
Camera feed → Canvas (48×48px) → Average brightness (0–255)
                                         ↓
                              brightness < 80?
                              YES → Set screen to max brightness
                              NO  → Reset to normal brightness
```

The hook `useRingLight.js` runs this check every **600ms**.
On mobile browsers it also requests a **Wake Lock** so the screen stays bright.

---

## Deploy to Internet (so anyone can access)

### Free option — Railway (easiest)
```bash
# Deploy server
cd server && railway up

# Build client and serve
cd client
REACT_APP_SERVER_URL=https://your-railway-url npm run build
# Deploy build/ folder to Vercel or Netlify
```

### Or use a single server
```bash
# Build React app
cd client && npm run build

# Serve from Express (add to server/index.js):
app.use(express.static(path.join(__dirname, '../client/build')));
```

---

## Features
- ✅ Create a room, share code — no accounts needed
- ✅ WebRTC peer-to-peer video (no video data goes through server)
- ✅ Auto ring light — detects darkness, boosts screen brightness
- ✅ Mute / Camera off / Flip camera
- ✅ In-call text chat
- ✅ Works on mobile browser (Chrome, Safari)
- ✅ Shows room code to copy and share