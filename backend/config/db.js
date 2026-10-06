const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    console.log(`[MongoDB] Connected successfully to ${uri.includes('mongodb+srv') ? 'Atlas Cloud Database' : 'Local Database'}`);
  } catch (err) {
    console.error(`[MongoDB] Atlas Connection error: ${err.message}`);
    if (uri.includes('mongodb+srv')) {
      try {
        console.log('[MongoDB] Attempting fallback to local database: mongodb://localhost:27017/thezar');
        await mongoose.connect('mongodb://localhost:27017/thezar');
        console.log('[MongoDB] Local database connected successfully.');
      } catch (fallbackErr) {
        console.error('[MongoDB] Fallback error:', fallbackErr.message);
      }
    }
  }
};

module.exports = connectDB;
