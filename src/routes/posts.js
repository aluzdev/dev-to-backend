const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

const { getPosts, createPost, getPostById } = require("../controllers/posts");

router.get("/get", getPosts);
router.post("/create", createPost);
router.get("/get/:id", getPostById);
//TODO: add .put and .delete

module.exports = router;
