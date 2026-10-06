const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Content-Security-Policy & DevTools Header Middleware
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; connect-src * 'unsafe-inline' ws: wss:;"
  );
  next();
});

// Chrome DevTools probe endpoint to prevent 404 & CSP console error
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(200).json({});
});

// Favicon handler to prevent 404 console error
app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// Connect Database
connectDB();

// 1. Root Landing Route (Displays beautiful status page when visited in browser)
app.get('/', (req, res) => {
  if (req.accepts('html')) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>THEZAR 2026 | Backend API Server</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #0f172a;
            color: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }
          .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 20px;
            max-width: 640px;
            width: 100%;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(16, 185, 129, 0.15);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.3);
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 20px;
          }
          .badge::before {
            content: '';
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 10px #10b981;
          }
          h1 {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 900;
            color: #ffffff;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #f87171, #ef4444, #dc2626);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p.subtitle {
            color: #94a3b8;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 28px;
          }
          .endpoints {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 28px;
          }
          .endpoint-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #0f172a;
            border: 1px solid #334155;
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 13px;
          }
          .method {
            background: #9e0804;
            color: white;
            font-weight: 800;
            font-size: 10px;
            padding: 4px 8px;
            border-radius: 6px;
            font-family: monospace;
          }
          .path {
            font-family: monospace;
            color: #cbd5e1;
            font-weight: 600;
          }
          .links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .btn {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 20px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 13px;
            transition: all 0.2s;
          }
          .btn-primary {
            background: linear-gradient(135deg, #9e0804, #dc2626);
            color: white;
          }
          .btn-primary:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }
          .btn-secondary {
            background: #334155;
            color: #f1f5f9;
          }
          .btn-secondary:hover {
            background: #475569;
            transform: translateY(-1px);
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge">API Server Running • Port 5000</div>
          <h1>THEZAR 2026 Backend</h1>
          <p class="subtitle">
            Tamil Nadu Statewide Talent Championship League — Central Express &amp; MongoDB Microservice is online and healthy.
          </p>

          <div class="endpoints">
            <div class="endpoint-item">
              <span class="path">/api/site-content</span>
              <span class="method">GET</span>
            </div>
            <div class="endpoint-item">
              <span class="path">/api/admin/stats</span>
              <span class="method">GET</span>
            </div>
            <div class="endpoint-item">
              <span class="path">/health</span>
              <span class="method">GET</span>
            </div>
          </div>

          <div class="links">
            <a href="http://localhost:5173" class="btn btn-secondary">🌐 Open Website (5173)</a>
            <a href="http://localhost:5173/admin/portal/login" class="btn btn-primary">🎛️ Admin Portal</a>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    res.json({
      success: true,
      service: 'TheZar 2026 Backend API',
      status: 'online',
      port: PORT,
      database: 'MongoDB Connected',
      timestamp: new Date()
    });
  }
});

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api', registrationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'TheZar Backend API', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`[TheZar Backend] Server running on http://localhost:${PORT}`);
});
