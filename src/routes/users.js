const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { verifyJWT } = require("../middlewares/authentication");
const {
  getUsers,
  createUser,
  getUserById,
  userLogin,
  deleteUserById,
} = require("../controllers/users");

router.post("/login", userLogin);

router.use(verifyJWT); // ESTE MIDDLEWARE ES VALIDO PARA TODOS LOS ENDPOINTS QUE ESTAN DEBAJO

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
