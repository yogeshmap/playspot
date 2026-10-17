require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/playspot');

app.use('/api/auth', require('./routes/auth'));
app.use('/api/turfs', require('./routes/turf'));
app.use('/api/bookings', require('./routes/booking'));

app.use(express.static(path.join(__dirname, '..', 'client')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'index.html')));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
