const { Router } = require("express");
const { getPosts, createPost } = require("../controllers/posts");

const router = Router(); // Use express.Router() to create a router instance

router.get("/get", getPosts);
router.post("/create", createPost);
//TODO: add .put and .delete

module.exports = router;
