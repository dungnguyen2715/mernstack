import express from "express";
import { loginController, registerController } from "~/controllers/users.controllers";
import { loginValidator } from "~/middlewares/users.middlewares";
const usersRouter = express.Router();
usersRouter.post("/user", loginValidator, loginController);
usersRouter.post("/register", registerController)
export default usersRouter