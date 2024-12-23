import { error } from "console";
import { Request, Response } from "express";
import User from "~/models/schemas/User.schema";
import databaseService from "~/services/database.services";
import usersServices from "~/services/User.services";

export const loginController = (req: Request, res: Response) => {
  const {email, password} = req.body
  if(email === "dung@gmail.com" && password === "dung123"){
    res.json({
      data: {
        fname: "dung",
        yob: 2005
      }
    })
  } else{
    res.status(400).json({
      error: "Email or password invalid"
    })
  }
}

export const registerController = async (req: Request, res: Response) => {
  const{email, password} = req.body
  try{
    const result = await usersServices.register({email, password})
    console.log(result);
    res.json({
      message: "Register succes"
    })
  }catch(err){
    res.status(400).json({
      message: "Register failed",
      error: "err"
    })
  }
}