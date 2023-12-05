
var AllStudent = require('../Models/Student_Schema'); // Ajusta la ruta según la ubicación de tu archivo de esquema

// Ahora puedes utilizar el modelo 'AllStudent' para interactuar con la base de datos

const newStudent = async (req,res)=>{  
        try {
          
            console.log(req.body.nombre);
            const Student = new AllStudent ({
              
                name: req.body.nombre,
                age : req.body.Age
                
            })
        
                const saved = Student.save();
               
               
              res.status(200).json(saved);
                
           
        } catch (error) {
            res.status(500).json({ error: 'Error al guardar el estudiante en la base de datos' });
        }
}

module.exports = {
    newStudent
  };
