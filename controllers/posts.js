const postModel = require("../models/posts");

module.exports.getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.send(posts);
};

module.exports.createPost = async (req, res) => {
  try {
    const { post } = req.body;
    const data = await postModel.create({ post });
    console.log(`post saved successfuly:`, data);
    res.status(201).send(data);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err, msg: "Could not create post!" });
  }
};

//TODO: add update and delete controllers
