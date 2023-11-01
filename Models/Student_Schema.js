
const mongoose = require('mongoose');

const allStudent  =  new mongoose.Schema({
  
    name:{
        type : String,
        required: true
    },
    age:{
        type : Number,
        required : true
    },
})

module.exports = mongoose.model('alumnos', allStudent);