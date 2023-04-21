const express = require('express');
const router = express.Router();
const User = require("../models/userModels");
// const connectEnsureLogin = require("connect-ensure-login")

router.get("/regFO", (req, res) => {
    res.render('regfo');
  })

  router.get("/regUF", (req, res) => {
    res.render('regUF');
  })

  




  

  router.post("/regfo", async(req,res)=>{
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
            res.redirect("/Adminlogin")
        })
     }   
    }
    catch(error){
        res.status(400).send("Sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})




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
            res.redirect("/Adminlogin")
        })
     }   
    }
    catch(error){
        res.status(400).send("Sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})

















module.exports = router;