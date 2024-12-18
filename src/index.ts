//import express to project
import express from 'express'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routers'

const app = express() // use express to create server, not use commonJS
const port = 3000 //server will run on 3000
databaseService.connect()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use("/user", usersRouter)

app.listen(port, () => {
  console.log(`this project is running on port ${port} `)
})
