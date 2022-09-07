import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, minlength: 11, maxlength: 11},
    birthDate: {type: Date},
    email: {type: String, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, required: true},
    password: {type: String, minlength: 6},
    address: {type: String},
    number: {type: String},
    complement: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    zipCode: {type: String}
  }
)