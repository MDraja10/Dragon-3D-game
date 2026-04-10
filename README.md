# 3D Dragon Shooter Mini App

A responsive Telegram Mini App built with React, Vite, TailwindCSS, and React Three Fiber.

## Setup

1. Open a terminal in `frontend/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Create a production build:
   ```bash
   npm run build
   ```

## Features

- Fully responsive lobby and game UI for mobile, tablet, and desktop
- Touch controls for mobile with auto-hide buttons and haptic feedback
- Keyboard controls for desktop (Arrow keys + Spacebar)
- Responsive shop, PVP, skills, leaderboard, and voyage interfaces
- Optimized 3D game canvas with low-poly dragon models and lightweight particle effects
- Telegram Web App compatibility with `telegram-web-app.js`

## Telegram Mini App Integration

1. Host the production build from `frontend/dist` over HTTPS.
2. Add your app URL in Telegram Bot settings under Web Apps.
3. The app already includes the Telegram Web App script in `index.html`.
4. Telegram benefits from the responsive layout, safe-area support, and full-screen mode.

## Performance Notes

- Mobile devices disable extra shadows and use fewer particles.
- Desktop devices run with full visual detail.
- The game uses `frameloop="demand"` for better battery and browser performance.

## Recommended Commands

```bash
cd frontend
npm install
npm run dev
```
