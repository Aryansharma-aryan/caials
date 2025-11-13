const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./db/db');
const consultRoute = require('./routes/consultRoute');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed origins
const allowedOrigins = [
  'https://www.caials.com',
  'https://caials.com',
  'http://localhost:5173', // local frontend for dev
];

// ✅ CORS setup
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('🚫 Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use('/api', consultRoute);

// ✅ Health check
app.get('/', (req, res) => {
  res.send('Consultancy API Running...');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 Allowed origins: ${allowedOrigins.join(', ')}`);
});
