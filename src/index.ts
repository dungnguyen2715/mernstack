import express from "express";
import usersRouter from "./routes/users.routers";
import databaseService from "./services/database.services";

const app = express();
const port = 4000
databaseService.connect()
app.use(express.json())
app.get("/", (req, res) => {
  res.send('hello world')
})

app.use("/user", usersRouter);

app.listen(() => {
  console.log(`port is running on port ${port}`);
})