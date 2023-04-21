// routes/index.js

const express = require('express');
const router = express.Router();
const Product = require('../models/productsModel');
const CartItem = require('../models/cartModel');

// Define a route for adding products to the cart
router.post('/add-to-cart', async (req, res, next) => {
  const { productId } = req.body;

  try {
    // Find the product in the database
    const product = await Product.findById(productId);

    // Create a new cart item with the product and quantity 1
    const cartItem = new CartItem({
      product: product._id
    });

    // Save the new cart item to the database
    await cartItem.save();

    // Add the new cart item to the user's cart array
    req.session.cart = req.session.cart || [];
    req.session.cart.push(cartItem._id);

    // Redirect the user to the checkout page
    res.redirect('/checkout');
  } catch (err) {
    next(err);
  }
});

// Define a route for displaying the cart contents
router.get('/checkout', async (req, res, next) => {
  try {
    // Find all the cart items in the user's cart array
    const cartItems = await CartItem.find({ _id: { $in: req.session.cart } }).populate('product');

    // Render the checkout page with the cart items
    res.render('checkout', { cartItems });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
