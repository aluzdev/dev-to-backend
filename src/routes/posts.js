const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

const { getPosts, createPost, getPostById, deletePostById } = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.delete("/:id", deletePostById);

//TODO: add .put and .delete

module.exports = router;
