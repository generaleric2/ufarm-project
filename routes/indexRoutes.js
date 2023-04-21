const express = require('express');
const router = express.Router();
const multer = require('multer')
const Products = require('../models/productsModel')


let storage = multer.diskStorage({
  destination:(req,file,cb)=>{cb(null,"public/images")},
  filename:(req,file,cb)=>{cb(null,file.originalname)}})
let imageupload = multer({storage: storage})



  router.get("/upload", (req, res) => {
    res.render('upload');
  });

  router.post("/upload", imageupload.single("productimage"),(req, res) => {
    console.log(req.file)
    try {
      const products = new Products(req.body)
      products.productimage = req.file.originalname
      products.save()
      res.redirect("/upload")
    } catch (error) {
      res.send("upload failed ${error}")
    }
  });



  module.exports = router;