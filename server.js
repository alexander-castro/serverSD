const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.get('/students', (req, res) => {
    const students = {data: ['Giss', 'Alex', 'Anna']}
    res.send(students)
})

app.get('/teachers', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})