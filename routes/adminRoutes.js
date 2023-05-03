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




  router.get("/update_det/:username", async (req, res) =>{
    try{
        const item = await User.findOne({username:req.params.username});
        res.render("updatedet", {farmerone:item}); 
    }
    catch(err) {
        res.send("could not find student");
        console.log(err)
    }
});


router.post("/updatedet", async(req,res)=>{
    try{
        await User.findOneAndUpdate({username:req.query.username}, req.body)
        res.redirect("/admindash")
    }
    catch(err){
        res.send('cant update student details')
        console.log(err)
    }

});


  router.get("/regFO", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('regFO');
  })


  router.get("/admindash", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('admindash');
  })




  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });





  module.exports = router;