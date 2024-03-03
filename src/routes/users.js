const express = require("express");
const router = express.Router();
const User = require("../models/users");
const {
  getUsers,
  createUser,
  getUserById,
  userLogin,
  deleteUserById,
} = require("../controllers/users");

router.post("/login", userLogin);

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
