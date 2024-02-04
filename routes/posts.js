const { Router } = require("express");
const { getPosts } = require("../controllers/posts");

const router = Router(); // Use express.Router() to create a router instance

router.get("/get", getPosts);

module.exports = router;
