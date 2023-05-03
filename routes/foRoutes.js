const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const User = require('../models/userModels')



router.get("/regUF", (req, res) => {
  res.render('reguf');
})


router.get("/FOdashboard", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    let farmerWard = req.user["ward"]
    console.log("farmers ward is:", farmerWard)
    if(req.user.role == "farmerone"){
      try {
        let activeFarmers = await User.countDocuments();
        let newurbanFarmer = await User.find({role: "urbanfarmer", ward: farmerWard})
  
        res.render("FOdashboard", {
          urbanFarmers: newurbanFarmer, 
          activeFarmers})
      } catch (error){
          res.status(400).send("couldnot find farmers in the database")
      } 
     
    } else {res.redirect("./Adminlogin")}
    });





    router.post("/reguf", async(req,res)=>{
      try{
       const user = new User(req.body);
       let userName = await User.findOne({username: req.body.username})
       if(userName){
          return res.send("this unique ID already exists")
       }
       else{
           User.register(user, req.body.password, (error)=>{
              if(error){
                  throw error
              }
              res.redirect("/regUF")
          })
       }   
      }
      catch(error){
          res.status(400).send("Sorry it seems there is trouble accessing this page")
          console.log(error)
      }
  })
  




  module.exports = router;