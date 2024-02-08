const mongoose = require("mongoose");
const { postSchema } = require("./posts");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Ingresa un correo valido: ejemplo juan.perez@gmail.com",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  savedPost: [postSchema], // Usar el esquema de posts para definir los posts guardados
});

const User = mongoose.model("users", userSchema);

module.exports = User;
