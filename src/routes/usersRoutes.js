import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/users", UserController.getUsers)
  .get("/users/:id", UserController.getUserById)
  .post("/users", UserController.postUser)
  .put("/users/:id", UserController.putUser)
  .delete("/users/:id", UserController.deleteUser)

export default router;