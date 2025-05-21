/*
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
*/
/*
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: {
    main: String,
  },
  description: String,
});

module.exports = mongoose.model('Product', productSchema);
*/

/* models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: {
    main: String,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
*/

/*
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: {
    main: String,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
*/

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: {
    main: { type: String }
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;


