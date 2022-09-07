import express from "express";
const router = express.Router();

import UserController from "../controllers/usersController.js";


router
  .get("/api/v1/users", UserController.getUsers)
  .get("/api/v1/users/search", UserController.getUserByName)
  .get("/api/v1/users/:id", UserController.getUserById)
  .post("/api/v1/users", UserController.postUser)
  .put("/api/v1/users/:id", UserController.putUser)
  .delete("/api/v1/users/:id", UserController.deleteUser)

export default router;