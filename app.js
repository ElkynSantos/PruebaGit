const express = require('express')
const app = express()
const port = 3000

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