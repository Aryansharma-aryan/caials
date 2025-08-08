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
const allowedOrigins = ['https://www.caials.com', 'http://localhost:5173'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like curl, Postman)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));


<<<<<<< HEAD
// CORS config to allow only your frontend origin
app.use(cors({
  origin: 'https://www.caials.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

=======
>>>>>>> d03b8904 (Fix CORS and favicon issues)
app.use(express.json());

app.use("/api", consultRoute)

app.get('/', (req, res) => {
  res.send('Consultancy API Running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
