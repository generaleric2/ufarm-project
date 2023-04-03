const express = require('express');
const router = express.Router();
const Register = require("../models/registerModels")

router.get("/regFO", (req, res) => {
    res.render('regFO');
  })




  

router.post("/regFO", async (req, res) => {
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect("/")
        console.log(req.body)
    }
    catch(err){
        res.status(400).render("/")
    }
})
















module.exports = router;