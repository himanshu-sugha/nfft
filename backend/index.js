// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db'); // Import db connection setup
const biddingRouter = require('./routes/bidding');

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/bidding', biddingRouter);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
