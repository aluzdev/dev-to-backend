const Post = require("../models/posts");

module.exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

module.exports.createPost = async (req, res) => {
  try {
    const data = await Post.create(req.body);
    await data.save();

    console.log(`post saved successfuly:`, data);
    res.status(201).send(data);

    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err, msg: "Could not create post!" });
  }
};

//TODO: add update and delete controllers
