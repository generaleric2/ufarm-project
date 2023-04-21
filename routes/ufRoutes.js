const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")

router.get("/ufdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('ufdashboard');
  })




  module.exports = router;