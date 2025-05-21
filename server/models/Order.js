const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  phone: String,
  paymentMethod: String,
  subtotal: Number,
  shippingFee: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
