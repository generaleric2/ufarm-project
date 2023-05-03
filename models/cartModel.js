// models/cartItem.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
  },
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('CartItem', cartItemSchema);
