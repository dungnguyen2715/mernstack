//declare express
import express from 'express'
const usersRouter = express.Router() //declare Router
//import middleware
import { loginValidator } from '~/middlewares/users.middlewares'
//import controller
import { loginController } from '~/controllers/users.controllers'
usersRouter.post('/login', loginValidator, loginController)

export default usersRouter
