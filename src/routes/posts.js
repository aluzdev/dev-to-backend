const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const { verifyJWT } = require("../middlewares/authentication");

const {
  getPosts,
  createPost,
  getPostById,
  putPost,
} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", verifyJWT, createPost);
router.get("/:id", getPostById);
router.put("/:id", verifyJWT, putPost);

//TODO: add .put and .delete

module.exports = router;
