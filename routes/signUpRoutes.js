const express = require('express');
const router = express.Router();
const User = require("../models/userModels");

router.get("/signup", (req, res) => {
    res.render('signup');
  });


router.post("/signup",async(req,res)=>{
    try{
     const user = new User(req.body);
     let userName = await User.findOne({username: req.body.username})
     if(userName){
        return res.send("this unique ID already exists")
     }
     else{
        await User.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect("/login")
        })
     }   
    }
    catch(error){
        res.status(400).send("Sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})



  module.exports = router;