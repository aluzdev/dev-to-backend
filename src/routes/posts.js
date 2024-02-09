const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const { verifyJWT } = require("../middlewares/authentication");

const {
  getPosts,
  createPost,
  getPostById,
  putPost,
  deletePostById,
} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id", verifyJWT, putPost);
router.delete("/:id", deletePostById);

module.exports = router;
