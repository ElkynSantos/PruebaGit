
var PizzasModel = require('../Models/Pizza_Schema'); // Ajusta la ruta según la ubicación de tu archivo de esquema

// Ahora puedes utilizar el modelo 'AllStudent' para interactuar con la base de datos

const newPizza = async (req,res)=>{  
        try {
          
            console.log(req.body.nombre);
            const Pizzas = new PizzasModel ({
                name: req.body.name,
                price : req.body.price,
                sku: req.body.sku,
                ingredients : req.body.ingredients,
                tamano: req.body.tamano,   
            })
        
                const saved = Pizzas.save();
               
               
              res.status(200).json(saved);
                
           
        } catch (error) {
            res.status(500).json({ error: 'Error al guardar el estudiante en la base de datos' });
        }
}

const getPizza = async (req,res) => {
    try {
        const usuarios = await PizzasModel.find(); // Realiza una consulta para obtener todos los usuarios
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
      }
}

const updatePizza = async (req,res) => {
    try{
        const PizzaId = req.body.id;
        const Pizzas = ({
            name: req.body.name,
            price : req.body.price,
            sku: req.body.sku,
            ingredients : req.body.ingredients,
            tamano: req.body.tamano,   
        })

        
        const update = await PizzasModel.findByIdAndUpdate(PizzaId,Pizzas,{new:true});
        if (update.modifiedCount == 0) {
            return res.status(401).json({ msg: "ERROR" });
          } else {
            res.status(200).json({ msg: "Ingredient Updated!!" });
          }
    }catch (error){

    }
}
const DeletePizza = async (req,res) => {
    try{
       
        const response = await PizzasModel.deleteOne({ sku: req.params.sku })
        res.status(200).json({ msg: "Pizza Deleted!!", data: response });
    }catch (error){

    }
}
module.exports = {
    newPizza,
    getPizza,
    updatePizza,
    DeletePizza
  };
