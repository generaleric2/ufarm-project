const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productimage:{
        type:String,
    },
    price:{
        type:Number,
    },
    productname:{
        type:String,
    },
    status:{
        type:String,
        default: "pending",
    },
})

module.exports = mongoose.model("Products", productsSchema)