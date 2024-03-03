const { response } = require("express");
const Post = require("../models/posts");

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Post.find().populate("author");
    res.send(posts);
  },

  createPost: async (req, res) => {
    try {
      const postData = req.body;
      console.log({ postData });
      const data = await Post.create(postData);
      await data.save();

      console.log(`post saved successfuly:`, data);
      res.status(201).send(data);

      console.log(data);
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err, msg: "Could not create post!" });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id).populate("author");
      res.json({
        success: true,
        message: `Post ${id}`,
        data: { post },
      });
    } catch (err) {
      res.status(err.status || 500);
      res.json({
        success: false,
        error: err.message,
      });
    }
  },

  putPost: async (req, res) => {
    try {
      const find = await Post.findById(req.params.id);
      if (!find) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        const respPet = await Post.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        res.status(202).send(respPet);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  deletePostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findByIdAndDelete(id);

      if (!post) {
        return res.status(404).send({ msg: "Post not found" });
      } else {
        console.log(`deleted post sucesfully:`, post);
        res.status(200).send({ msg: "deleted post sucesfully" });
      }
    } catch (err) {
      res.status(500).send({ error: err, msg: "Could not deletete post!" });
    }
  },
};
//TODO: add update controllers
