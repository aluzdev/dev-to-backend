/*
const { Router } = require("express");
const { getPosts, createPost, getPostById } = require("../controllers/posts");

const router = Router(); // Use express.Router() to create a router instance

router.get("/get", getPosts);
router.post("/create", createPost);
router.get("/get/:id"), getPostById;
//TODO: add .put and .delete
*/
const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

const PostController = require("../controllers/posts");

router.get("/get", PostController.getPosts);
router.get("/create", PostController.createPost);
router.get("/get/:id", PostController.getPostById);

module.exports = router;
