import { Request, Response, NextFunction } from 'express'

//1 req of client sending to server has a body
//it means in the req will has the body that we need to send to server (name, mail, ...)
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body) //log it to see what is in it
  const { email, password } = req.body // destructuring
  if (!email || !password) {
      res.status(400).json({
      error: 'Missing email or password'
    })
  }
  next();
}
