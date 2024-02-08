const express = require("express");
const router = express.Router();
const User = require("../models/users");
<<<<<<< HEAD
const {
  getUsers,
  createUser,
  getUserById,
  userLogin,
} = require("../controllers/users");

router.post("/login", userLogin);

router.get("/get", getUsers);
router.post("/create", createUser);
router.get("/get/:id", getUserById);
=======

// Ruta para obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ msg: "All users", data: users });
  } catch (error) {
    res.status(400).send({ msg: "Can't get users", error: error });
  }
});

// Ruta para buscar un usuario por ID
router.get("//:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.send({ msg: "User found", data: user });
  } catch (error) {
    res.status(400).send({ msg: "Error getting user", error: error });
  }
});

// Ruta para crear un nuevo usuario
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).send({ msg: "User created successfully", data: newUser });
  } catch (error) {
    res.status(400).send({ msg: "Error creating user", error: error });
  }
});
>>>>>>> 568220d40a7d707c7d8cce0f8d261aec7f656d14

module.exports = router;
