# 🎮 Shooting Game - Web Edition

A fast-paced, browser-based shooting game built with React, TypeScript, and Canvas API.

## 🚀 Features

- **Real-time Gameplay**: Smooth 60 FPS combat action
- **Progressive Difficulty**: Enemies get stronger each wave
- **Health & Ammo System**: Manage resources strategically
- **Wave-Based Combat**: Survive increasingly difficult enemy waves
- **Mobile-Friendly**: Works on desktop, tablet, and mobile devices
- **Score Tracking**: Compete for high scores

## 🎮 How to Play

### Controls
- **Mouse**: Aim your weapon
- **Click**: Shoot enemies
- **WASD**: Move around the arena
- **ESC**: Pause/Resume game

### Objective
- Eliminate all enemies in each wave to progress
- Each defeated enemy gives you points
- Survive as long as possible
- Manage your ammo and health wisely

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/sgrz5/shooting-game-web.git
cd shooting-game-web
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to GitHub Pages:
```bash
npm run deploy
```

The game will be available at: `https://sgrz5.github.io/shooting-game-web/`

## 🎯 Game Mechanics

### Player
- Green circle with direction indicator
- Health bar displayed above
- Ammo regenerates slowly when not shooting

### Enemies
- Red circles that chase the player
- Get faster and stronger each wave
- Drop points when defeated

### Waves
- Start with 5 enemies per wave
- Each wave increases difficulty
- Defeat all enemies to progress to the next wave

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Canvas API** - Game rendering
- **Tailwind CSS** - Styling
- **Vercel/GitHub Pages** - Deployment

## 📊 Project Structure

```
src/
├── App.tsx                 # Main component with HUD
├── game/
│   ├── GameEngine.ts      # Core game loop and logic
│   └── entities/
│       ├── Player.ts      # Player class
│       ├── Enemy.ts       # Enemy class
│       └── Bullet.ts      # Bullet class
└── index.css              # Global styles
```

## 🚀 Future Enhancements

- [ ] Different weapon types
- [ ] Power-ups and special items
- [ ] Sound effects and music
- [ ] Leaderboard system
- [ ] Multiple game modes
- [ ] Enemy variations
- [ ] Boss battles
- [ ] Achievements system

## 📝 License

MIT License - Feel free to use this project for learning and development!

## 👤 Author

Created by **sgrz5**

---

**Ready to play?** Start the game with `npm run dev` and survive the waves! 🎮
