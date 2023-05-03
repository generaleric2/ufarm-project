const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const User = require('../models/userModels')

router.get("/uploads", (req, res) => {
    res.render('uploads');
  })





router.get("/ufdashboard", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  let farmerWard = req.user["ward"]
  console.log("farmers ward is:", farmerWard)
  if(req.user.role == "urbanfarmer"){
    try {
      let activeFarmers = await User.countDocuments();
      let newfarmerOne = await User.find({role: "user", ward: farmerWard})

      res.render("ufdashboard", {
        farmerOnes: newfarmerOne, 
        activeFarmers})
    } catch (error){
        res.status(400).send("couldnot find farmers in the database")
    } 
   
  } else {res.redirect("./Adminlogin")}
  });




  module.exports = router;