import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'dung@gmail.com' && password == 'dung123') {
    res.json({
      data: {
        fname: 'dung',
        yob: 2005
      }
    })
  } else {
    res.status(400).json({
      error: 'Invalid email or password'
    })
  }
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const isEmailExist = await usersService.checkEmailExist(email);
    if (isEmailExist) {
      //sẽ không hiện được message vì Error có message là enumerable: false
      const errorCustom = new Error("Email already exists"); //ta phải set lại enumerable: true
      Object.defineProperty(errorCustom, "message", {
        enumerable: true,
      });
      throw errorCustom;
    }
    const result = await usersService.register({ email, password })
    console.log(result)
    res.status(200).json({
      message: 'Register success', //chỉnh lại thông báo
      result: result
    })
  } catch (err) {
    res.status(400).json({
      message: 'Register failed', //chỉnh lại thông báo
      err: err
    })
  }
}
