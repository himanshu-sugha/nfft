// backend/routes/nft.js
const express = require('express');
const router = express.Router();

// Mock database
let nftDrops = [];

// Schedule NFT Drop
router.post('/schedule-drop', (req, res) => {
  const { name, description, date, complianceLevel } = req.body;
  nftDrops.push({ name, description, date, complianceLevel });
  res.status(201).send({ message: 'NFT Drop Scheduled Successfully!' });
});

// Get all scheduled NFT Drops
router.get('/drops', (req, res) => {
  res.status(200).send(nftDrops);
});

module.exports = router;
