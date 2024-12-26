import User from '~/models/schemas/User.schema'
import databaseService from './database.services'

class UsersService {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return result
  }
  async checkEmailExist(email: string) {
    //vào database tìm xem có hông
    const user = await databaseService.users.findOne({ email })
    return Boolean(user) //có true, k false
  }
}
const usersService = new UsersService()
export default usersService
