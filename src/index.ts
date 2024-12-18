//import express to project
import express from 'express'
const app = express() // use express to create server, not use commonJS
import usersRouter from './routes/users.routers'
const port = 3000 //server will run on 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use("/user", usersRouter)

app.listen(port, () => {
  console.log(`this project is running on port ${port} `)
})
