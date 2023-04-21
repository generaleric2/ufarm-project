const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser')
const passport = require("passport")
const session = require("express-session")
const User = require("./models/userModels")
// const User = require("./models/registerModels")



const config = require('./config/database');

const registerRoutes = require('./routes/registerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const landingRoutes = require('./routes/landingRoutes')
const indexRoutes = require('./routes/indexRoutes')
const signUpRoutes = require('./routes/signUpRoutes')
const adminRoutes = require('./routes/adminRoutes')
const ufRoutes = require('./routes/ufRoutes')
const foRoutes = require('./routes/foRoutes')
const adminLoginRoutes = require('./routes/adminLoginRoutes')
const productRoutes = require ('./routes/productRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')


app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// creating a connection between controller and database
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = mongoose.connection
  // checking if db has connected
  db.once ('open', ()=> {
    console.log('connected to db')
  })
  db.on ('error', (err)=> {
    console.error(err)
  })





app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/images')))





app.use('/',registerRoutes)
app.use('/',loginRoutes)
app.use('/',landingRoutes)
app.use('/',indexRoutes)
app.use('/',productRoutes)
app.use('/',signUpRoutes)
app.use('/',adminRoutes)
app.use('/',checkoutRoutes)
app.use('/',adminLoginRoutes)
app.use('/',foRoutes)
app.use('/',ufRoutes)


app.get("*", (req,res)=>{
  res.status(404).send("this doesnt exist")
})


app.listen(process.env.port || 3004,()=>
console.log('listening on port 3004'))