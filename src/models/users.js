const mongoose = require("mongoose");
<<<<<<< HEAD
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
    statics: {
      encryptPassword: async (password) => {
        const salt = await bcrypt.genSalt(15);
        return await bcrypt.hash(password, salt);
      },
      isValidPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
      },
    },
  }
);
=======
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
>>>>>>> 568220d40a7d707c7d8cce0f8d261aec7f656d14

const User = mongoose.model("users", userSchema);

module.exports = User;
