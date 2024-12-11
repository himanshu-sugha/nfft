// backend/models/NFT.js
const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  complianceLevel: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  auctionEndTime: { type: Date, required: true },
}, { timestamps: true });

const NFT = mongoose.model('NFT', nftSchema);
module.exports = NFT;
