const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./src/routes/posts");
const userRoutes = require("./src/routes/users");
const User = require("./src/models/users"); // Importar el modelo de usuario
const userData = require("./src/seed/seed.js"); // Importar los datos de usuario para seed

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

mongoose
  .connect(process.env.ALUZ_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Seed de usuarios
    seedUsers();
  })
  .catch((err) => console.error(err));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));

// Función para seedear usuarios
const seedUsers = async () => {
  try {
    // Eliminar todos los usuarios existentes
    await User.deleteMany({});
    // Insertar los nuevos usuarios
    await User.insertMany(userData);
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

seedUsers(); // Llamada a la función después de definirla
