const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const entries = require('./routes/entries');

const app = express();

// Connect to database
// connectDB();
const conn = require('./config/db');
conn.connectDB();
// Middleware
app.use(cors({
    origin: 'http://localhost:3001/'
}));
app.use(express.json());

// Routes
app.use('/api/entries', entries);

const PORT =  5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
