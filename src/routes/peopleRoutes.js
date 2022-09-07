import express from "express";
import PersonController from "../controllers/peopleController.js";

const router = express.Router();

router
  .get("/people", PersonController.getPeople)
  .get("/people/:id", PersonController.getPersonById)
  .post("/people", PersonController.postPerson)
  .put("/people", PersonController.putPerson)
  .delete("/people/:id", PersonController.deletePerson)

export default router;