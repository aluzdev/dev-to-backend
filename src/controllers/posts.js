const Post = require("../models/posts");

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
  },

  createPost: async (req, res) => {
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
  },

  deletePostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findByIdAndDelete(id);

      if (!post) {
        return res.status(404).send({ msg: "Post not found" });
      }
      else {
      console.log(`deleted post sucesfully:`, post);
      res.status(200).send({ msg: "deleted post sucesfully" });
      }
    } catch (err) {
      res.status(500).send({ error: err, msg: "Could not deletete post!" });
    }
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).send({ msg: "Post not found" });
      }
      else{
      res.send({ msg: "user", data: post });
      }
    } catch (error) {
      res.status(400).send({ msg: "can not get user", error: error });
    }
  },
};
//TODO: add update and delete controllers
