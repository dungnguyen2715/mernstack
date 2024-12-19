import express from "express"
import { loginController } from "~/controllers/users.controllers"
import { loginValidator } from "~/middlewares/users.middlewares"
//declare usersRouter
const usersRouter = express.Router()
//because router need to post to the server, it will use method post 
usersRouter.post("/user", loginValidator, loginController)
export default usersRouter