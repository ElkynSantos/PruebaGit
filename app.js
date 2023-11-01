const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const student = require('./Routes/StudentRoutes')
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

app.use("/api/students", student);


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