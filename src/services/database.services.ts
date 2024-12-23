import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from "dotenv";
import User from '~/models/schemas/User.schema';
dotenv.config();
const uri =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mernstackclut.wnoqo.mongodb.net/?retryWrites=true&w=majority&appName=mernstackClut`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      // await client.connect();
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (err) {
      console.error(err)
      throw err
    }
  }
  get user(): Collection<User>{
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}

  

const databaseService = new DatabaseService();
export default databaseService
//đây chính là injection
//vì nếu ta export class ra ngoài, mỗi lần dùng phải tạo object
//dẫn đến việc sẽ có nhiều chỗ xài, nhiều chổ tạo nhiều object
//giống nhau
//ta chỉ cần 1 object xuyên suốt dự án , nên ta export object ra ngoài để bên ngoài chỉ xài chung mà k tạo lại
