import express from 'express'
import { html } from './htmlUser.js'
import { users } from './userData.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json(users)
})

app.post('/', (req, res) => {
  const newUser = req.body;
  // const newUser = {
  //   id: 3,
  //   name: "Pedro",
  //   email: "XXXXXXXXXXXXXX",
  //   password: "123456",
  //   role: "user",
  // }
  users.push(newUser)
  res.send('El usuario se ha agregado')
})

app.get('/user', (req, res) => {
  res.send(html)
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})