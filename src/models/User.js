import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, validate: /[A-zÀ-ú\s]+$/, required: true },
    cpf: { type: String, validate: /^[0-9]*$/, minlength: 11, maxlength: 11, required: true },

    birthDate: { // * Validation to ensure the user is older than 18
      type: Date,
      validate: birthDate => {
        const currentDate = new Date()
        let userAge = Math.floor((currentDate - birthDate) / 31536000000)
        if (userAge > 17) {
            return true
        } else {
            return false
        }
      },
      required: true },

    email: { type: String, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, required: true },
    password: { type: String, minlength: 6, required: true },
    address: { type: String, required: true },
    number: { type: String, validate: /^[0-9]*$/, required: true },
    complement: { type: String, required: true },
    city: { type: String, validate: /[A-zÀ-ú\s]/, required: true },
    state: { type: String, validate: /[A-Z]/, required: true },
    country: { type: String, validate: /[A-zÀ-ú\s]/, required: true },
    zipCode: { type: String, validate: /^[0-9]*$/, minlength: 8, maxlength: 8, required: true }
  },
  {
    versionKey: false
  }
)

const users = mongoose.model('users', userSchema);

export default users;