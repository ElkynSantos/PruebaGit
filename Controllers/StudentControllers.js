const { request, response } = require("express");
const mongoose = require('mongoose');
const AllStudent = require('../Models/Student_Schema'); // Ajusta la ruta según la ubicación de tu archivo de esquema

// Ahora puedes utilizar el modelo 'AllStudent' para interactuar con la base de datos

const newStudent = (request,response)=>{

     console.log(request.body) 
    const Student = new AllStudent ({
        id : request.body.id,
        name: request.body.name,
        age : request.body.age
        
    })
        try {
        
            Student.save((error, Student) => {
               
                    
                    response.status(200).json(Student);
                
            });
        } catch (error) {
            response.status(500).json({ error: 'Error al guardar el estudiante en la base de datos' });
        }
}

module.exports = newStudent;
