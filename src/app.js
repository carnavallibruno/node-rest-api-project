import express from "express";

db.on("error", console.log(console, 'Error. Database NOT connected.'))
db.once("open", () => {
  console.log("Connected to database successfully!")
})

const app = express();

app.use(express.json());

routes(app);

export default app;