
var mongoose = require('mongoose');

var AllStudentsSchema = mongoose.Schema; 
const allStudent  =  new AllStudentsSchema({
  
    name:{
        type : String,
        required: true
    },
    age:{
        type : Number,
        required : true
    },
})




var StudentsModel = mongoose.model("Students", allStudent);

module.exports = StudentsModel;
