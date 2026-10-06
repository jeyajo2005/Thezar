const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();

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

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api', registrationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'TheZar Backend API', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[TheZar Backend] Server running on http://localhost:${PORT}`);
});
