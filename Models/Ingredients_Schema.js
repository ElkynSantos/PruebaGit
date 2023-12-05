var mongoose = require('mongoose');

var IngredientSchema = mongoose.Schema; 
const ingredients  =  new IngredientSchema({
  
    Sku: {
        type: String,
        required: true
    },
    name:{
        type : String,
        required: true
    },
    quantity:{
        type : Number,
        required : true
    },
    expiration_date: {
        type: Date,
        required: true
    },
    buy_date: {
        type: Date,
        required: true
    },

    price : {
        type:Number,
        Required: true
    }
})




var IngredientsModel = mongoose.model("Ingredients",ingredients);

module.exports = IngredientsModel;
