import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bruno:123@compass.qmitime.mongodb.net/compass-db");

let db = mongoose.connection;

export default db;