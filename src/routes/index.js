import express from "express";
import people from "./peopleRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Server online"})
  })

  app.use(
    express.json(),
    people
  )
}

export default routes;