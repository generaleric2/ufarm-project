const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const User = require('../models/userModels')


router.get("/admindash", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  let farmerWard = req.user["ward"]
  console.log("farmers ward is:", farmerWard)
  if(req.user.role == "agricofficer"){
    try {
      let activeFarmers = await User.countDocuments();
      let newFarmerOnes = await User.find({role: "farmerone", ward: farmerWard})

      res.render("admindash", {
        farmerOnes: newFarmerOnes, 
        activeFarmers})
    } catch (error){
        res.status(400).send("couldnot find farmers in the database")
    } 
   
  } else {res.redirect("/Adminlogin")}
  });




  router.get("/updatedet", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('updatedet');
  })


  router.get("/regFO", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('regFO');
  })


  router.get("/admindash", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('admindash');
  })





  module.exports = router;