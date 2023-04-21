const express = require("express");
const router = express.Router();
const User = require("../models/userModels");
const passport = require("passport")

router.get("/login", (req,res)=>{
    res.render('login');
});


router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.name,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session", req.session)
    res.redirect("/index")
})



router.post("/logout", (req,res)=>{
    if(req.session){
       req.session.destroy((error)=>{
        if(error){
        res.status(400).send("unable to logout user")
       }else{
        return res.redirect("/login", "/Adminlogin")
       }  
    })
    }
})

















module.exports = router;