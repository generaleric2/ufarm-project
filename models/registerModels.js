const mongoose =  require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim: true
    },
    lastname:{
        type:String,
        trim: true
    },
    uniquenumber:{
        type:String,
        trim: true
    },
    password:{
        type:String,
        trim: true
    },
    role:{
        type:String,
        trim: true
    },
    nin: {
        type:String,
        trim: true
    },
    phoneNumber: {
        type:String,
        trim: true
    },
    residentType: {
        type:String,
        trim: true
    },
    periodofStay: {
        type:Number,
        trim: true
    },
    dateOfRegistration: {
        type:Date,
        trim: true
    },
    dateOfBirth: {
        type:Date,
        trim: true
    },
    gender: {
        type:String,
        trim: true
    },
    ward: {
        type:String,
        trim: true
    },
    streetName: {
        type:String,
        trim: true
    },
    houseNumber: {
        type:Number,
        trim: true
    },
    activities: {
        type:String,
        trim: true
    },
})


module.exports = mongoose.model('Register', registerSchema)