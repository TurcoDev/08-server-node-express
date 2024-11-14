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
  res.send('El usuario se ha agregado correctamente')
})

app.get('/user', (req, res) => {
  res.send(html)
})

app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  // const inicio = userId - 1;
  const inicio = users.findIndex(user => user.id === parseInt(userId));
  users.splice(inicio, 1)
  res.send(`Got a DELETE request at /user ${userId}`)
})

app.patch('/user/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  const user = users.find(user => user.id === parseInt(userId));
  user.email = updateUser.email;
  user.name = updateUser.name;
  user.password = updateUser.password;
  res.send('Got a PUT request at /user')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})