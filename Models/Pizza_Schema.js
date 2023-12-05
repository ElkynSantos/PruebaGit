var mongoose = require('mongoose');

var PizzaSchema = mongoose.Schema; 
const Pizzas  =  new PizzaSchema({
  
    name:{
        type : String,
        required: true
    },
    price:{
        type : Number,
        required : true
    },
    Sku: {
        type: String,
        required: true
    },

    ingredients: {
        type: Array,
        required: true
    },

    Tamano: {
        type: String,
        required: true
    }
})




var PizzasModel = mongoose.model("Pizzas",Pizzas);

module.exports = PizzasModel;
