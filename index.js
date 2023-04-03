const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser')



const config = require('./config/database');

const registerRoutes = require('./routes/registerRoutes')


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





app.use('/',registerRoutes)


app.listen(process.env.port || 3004,()=>
console.log('listening on port 3004'))