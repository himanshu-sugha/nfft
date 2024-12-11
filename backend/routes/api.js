const express = require('express');
const router = express.Router();

const nfts = [
  {
    id: 1,
    name: 'Golden Hour NFT',
    price: 0.5,
    description: 'A beautiful sunset captured as an NFT.',
    imageUrl: 'https://via.placeholder.com/300/FFD700',
  },
  {
    id: 2,
    name: 'Mystic Forest NFT',
    price: 1.2,
    description: 'A serene view of a mystic forest as an NFT.',
    imageUrl: 'https://via.placeholder.com/300/228B22',
  },
  {
    id: 3,
    name: 'Ocean Bliss NFT',
    price: 0.8,
    description: 'A calming ocean view captured as an NFT.',
    imageUrl: 'https://via.placeholder.com/300/1E90FF',
  },
];

router.get('/nfts', (req, res) => {
  res.json(nfts);
});

router.get('/nfts/:id', (req, res) => {
  const nft = nfts.find((n) => n.id === parseInt(req.params.id));
  if (nft) res.json(nft);
  else res.status(404).send('NFT not found');
});

module.exports = router;
