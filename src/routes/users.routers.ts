import express from "express"
import { loginController, registerController } from "~/controllers/users.controllers"
import { loginValidator, registerValidator } from "~/middlewares/users.middlewares"
//declare usersRouter
const usersRouter = express.Router()
//because router need to post to the server, it will use method post 
usersRouter.post("/login", loginValidator, loginController)

// Description: Register a new user
// Path: /register
// Method: POST
// Body: {
//     email: string,
//     password: string,
//     confirm_password: string
//     date_of_birth: ISO8601

// }
usersRouter.post("/register", registerValidator, registerController)
export default usersRouter