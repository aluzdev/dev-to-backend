const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { userLogin } = require("../controllers/login");
const { verifyJWT } = require("../middlewares/authentication");

router.post("/login", userLogin);

router.use(verifyJWT); // ESTE MIDDLEWARE ES VALIDO PARA TODOS LOS ENDPOINTS QUE ESTAN DEBAJO

const { getUsers, createUser, getUserById } = require("../controllers/users");

router.get("/get", getUsers);
router.post("/create", createUser);
router.get("/get/:id", getUserById);

module.exports = router;
