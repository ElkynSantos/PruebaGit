const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


const student = require('./Routes/StudentRoutes');
const Pizza_Routes = require("./Routes/PizzasRoute");
const Menu_Routes = require("./Routes/MenuRoutes");
const Ingredients_Routes = require("./Routes/IngredientsRoute");
app.use(express.json());

require('dotenv').config();
const uri = process.env.MOONGOSEKEY;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


mongoose.connect(uri, {
  useNewUrlParser: true,
});



app.get('/', (req, res) => {

  console.log(req.body)
  res.send('Hello World!')
})

app.get('/Ruta2', (req, res) => {
    res.send("Server Express")
  })

app.get('/Ruta3', (req, res) => {
    res.send("Prueba 2")
})
app.use("/api/students", student);
app.use("/api/Pizzas", Pizza_Routes);
app.use("/api/Menu", Menu_Routes);
app.use("/api/ingredients",Ingredients_Routes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})