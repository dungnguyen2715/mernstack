import express from "express";
import { loginController } from "~/controllers/users.controllers";
import { loginValidator } from "~/middlewares/users.middlewares";
const usersRouter = express.Router();
usersRouter.post("/user", loginValidator, loginController);
export default usersRouter