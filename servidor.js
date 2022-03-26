const express = require('express')
const app = express()
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/formulario.html')
})

app.post('/formulario', (req, res) => {
    res.sendFile(__dirname + '/formulario.html')
})
app.listen(3000, () => {
  console.log(`Servidor está executando.`)
})