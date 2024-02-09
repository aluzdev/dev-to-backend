const express = require("express");
const router = express.Router();
const User = require("../models/users");
const {
  getUsers,
  createUser,
  getUserById,
  userLogin,
} = require("../controllers/users");

router.post("/login", userLogin);

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);

module.exports = router;
