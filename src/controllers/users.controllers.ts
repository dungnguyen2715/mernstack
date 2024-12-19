import { Request, Response } from "express";

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