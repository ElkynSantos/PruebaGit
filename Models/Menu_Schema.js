var mongoose = require('mongoose');

var MenuSchema = mongoose.Schema; 
const menus  =  new MenuSchema({
  
    Sku: {
        type: String,
        required: true
    },
    name:{
        type : String,
        required: true
    },
    combo:{
        type : Array,
        required : true
    },
    price : {
        type:Number,
        Required: true
    }
})




var menusModel = mongoose.model("menus",menus);

module.exports = menusModel;