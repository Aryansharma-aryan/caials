const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./db/db');
const consultRoute= require("./routes/consultRoute")

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS config to allow only your frontend origin
app.use(cors({
  origin: 'https://www.caials.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

app.use("/api", consultRoute)

app.get('/', (req, res) => {
  res.send('Consultancy API Running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
