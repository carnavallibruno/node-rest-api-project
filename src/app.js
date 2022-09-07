import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Error. Database NOT connected.'))
db.once("open", () => {
  console.log("Connected to database successfully!")
})

const app = express();

app.use(express.json());

routes(app);

export default app;