# 🏆 TheZar Frontend - Tamil Nadu State-Level Competition Platform

**TheZar** is a modern, responsive web application for managing Tamil Nadu state-level talent competitions, district-level events, registration passes, and live leaderboards.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `canvas-confetti` for celebratory animations & `qrcode.react` for event passes

---

## 🔥 Key Features

- **🏠 Home Page**: Dynamic event countdown, district statistics, grand prize banner, interactive category grids, and event gallery.
- **📅 Events & Competitions**: District-wise event filter (Tirunelveli, Madurai, Chennai, Coimbatore, etc.) and category showcases (Coding, Robotics, Arts, Quiz, etc.).
- **🎟️ Instant Registration & QR Passes**: Modal registration workflow with instant QR-coded digital entry passes.
- **🏆 Live Leaderboard**: Real-time ranking breakdown by district and domain.
- **ℹ️ About & Contact**: Organization vision, core values, interactive FAQ accordion, and inquiry form.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (`>= 18.x`)
- npm or yarn

### Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Directory Structure

```
frontend/
├── public/              # Static assets & icons
├── src/
│   ├── assets/          # Images & branding assets
│   ├── Component/       # Reusable UI sections & modals
│   │   ├── About/       # Story, values & vision sections
│   │   ├── Contact/     # Contact info, forms & FAQs
│   │   ├── Events/      # Event grids & district explorer
│   │   ├── Footer/      # Site footer
│   │   ├── Home/        # Hero, countdown, prizes, leaderboards
│   │   ├── Modals/      # Event details & registration modal
│   │   └── Navbar/      # Top navigation header
│   ├── data/            # Mock dataset for events & rankings
│   ├── Pages/           # Main route views (Home, Events, About, Contact)
│   ├── App.jsx          # Route configuration
│   └── main.jsx         # Application entry point
├── package.json
└── vite.config.js
```

---

## 📜 License

ISC License
