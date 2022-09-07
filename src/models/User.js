import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, validate: /[A-zÀ-ú\s]+$/, required: true },
    cpf: { type: String, validate: /^[0-9]*$/, minlength: 11, maxlength: 11, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, required: true },
    password: { type: String, minlength: 6, required: true },
    address: { type: String, required: true },
    number: { type: String, validate: /^[0-9]*$/, required: true },
    complement: { type: String, required: true },
    city: { type: String, validate: /[A-zÀ-ú\s]/, required: true },
    state: { type: String, validate: /[A-zÀ-ú\s]/, required: true },
    country: { type: String, validate: /[A-zÀ-ú\s]/, required: true },
    zipCode: { type: String, validate: /^[0-9]*$/, minlength: 8, maxlength: 8, required: true }
  },
  {
    versionKey: false
  }
)

const users = mongoose.model('users', userSchema);

export default users;