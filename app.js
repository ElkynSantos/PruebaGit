const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const port = 3000

const uri = process.env.MOONGOSEKEY;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión a la base de datos establecida');
});


// Ruta POST para agregar un nuevo elemento a la base de datos
app.post('api/items', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Crea un nuevo objeto de datos con los valores proporcionados en la solicitud
    const newItem = new Item({ name, description });

    // Guarda el nuevo objeto en la base de datos
    await newItem.save();

    res.status(201).json({ message: 'Elemento agregado con éxito', item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar el elemento a la base de datos' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Ruta2', (req, res) => {
    res.send("Server Express")
  })

app.get('/Ruta3', (req, res) => {
    res.send("Prueba 2")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})