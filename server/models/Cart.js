const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String, // Or use ObjectId if you have a users collection
  productId: String,
  size: String,
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Cart', cartSchema);
