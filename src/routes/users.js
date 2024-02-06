const express = require("express");
const router = express.Router();
const User = require("../models/users");

const { getUsers, createUser, getUserById } = require("../controllers/users");

router.get("/get", getUsers);
router.post("/create", createUser);
router.get("/get/:id", getUserById);

module.exports = router;
