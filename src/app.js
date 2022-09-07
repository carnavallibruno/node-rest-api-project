import express from "express";

const app = express();

app.use(express.json());

routes(app);

export default app;