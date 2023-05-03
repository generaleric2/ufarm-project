const express = require('express');
const router = express.Router();
const Cart = require("../models/cartModel")
const Products = require("../models/productsModel")





router.get("/checkout", (req, res) => {
    res.render('checkout');
  });









  module.exports = router