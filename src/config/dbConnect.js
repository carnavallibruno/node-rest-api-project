import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bruno:123@compass.qax6oqq.mongodb.net/compass-db");

let db = mongoose.connection;

export default db;