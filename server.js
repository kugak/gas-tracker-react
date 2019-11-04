const express = require('express');
const connectDB = require('./config/db');

// Initialize
const app = express();

// Connect DB
connectDB();

// Index
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
