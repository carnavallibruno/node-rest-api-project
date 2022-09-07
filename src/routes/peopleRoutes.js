import express from "express";
import PersonController from "../controllers/peopleController.js";

const router = express.Router();

router
  .get("/people", PersonController.getPeople)
  .post("/people", PersonController.postPerson)

export default router;