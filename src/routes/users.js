const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { verifyJWT } = require("../middlewares/authentication");
const {
  getUsers,
  createUser,
  getUserById,
  userLogin,
} = require("../controllers/users");

router.post("/login", userLogin);

router.use(verifyJWT); // ESTE MIDDLEWARE ES VALIDO PARA TODOS LOS ENDPOINTS QUE ESTAN DEBAJO

router.get("/get", getUsers);
router.post("/create", createUser);
router.get("/get/:id", getUserById);

module.exports = router;
