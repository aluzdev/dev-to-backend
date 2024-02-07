const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

const { getPosts, createPost, getPostById, putPost } = require("../controllers/posts");

router.get("/get", getPosts);
router.post("/create", createPost);
router.get("/get/:id", getPostById);
router.put('/:id', putPost)
//TODO: add .put and .delete

module.exports = router;
