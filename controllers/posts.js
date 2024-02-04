const postModel = require("../models/posts");

module.exports.getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.send(posts);
};
