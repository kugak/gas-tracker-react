const express = require('express');
const connectDB = require('./config/db');

// Initialize
const app = express();

// Connect DB
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Index
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/tracker', require('./routes/api/tracker'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
