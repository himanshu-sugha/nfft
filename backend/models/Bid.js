// backend/models/Bid.js
const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  nftId: { type: mongoose.Schema.Types.ObjectId, ref: 'NFT', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bidAmount: { type: Number, required: true },
  complianceLevel: { type: Number, required: true },
}, { timestamps: true });

const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;
