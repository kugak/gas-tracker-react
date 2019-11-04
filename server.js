const express = require('express');

// Initialize
const app = express();

// Index
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
