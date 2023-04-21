const express = require("express");
const router = express.Router();
const User = require("../models/userModels");
const passport = require("passport")

router.get("/adminlogin", (req,res)=>{
    res.render('adminlogin');
});


router.post("/adminlogin", passport.authenticate("local", {failureRedirect: "/adminlogin"}), async (req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.username,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session", req.session)
    // res.redirect("/regFO")
    if(req.user.role == "agricofficer" && userExist){
      res.redirect('/admindash')
    } else if(req.user.role == "farmerone" && userExist){
      res.redirect('/FOdashboard')
    } else if(req.user.role == "urbanfarmer" && userExist){
      res.redirect('/ufdashboard')
    }
    else(res.send("you are not registered"))
  })




  router.post("/logout", (req,res)=>{
    if(req.session){
       req.session.destroy((error)=>{
        if(error){
        res.status(400).send("unable to logout user")
       }else{
        return res.redirect("/login")
       }  
    })
    }
})
















module.exports = router;