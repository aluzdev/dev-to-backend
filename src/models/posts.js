const mongoose = require("mongoose");

// const urlValidator = {
//   validator: (v) => {
//     const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
//     return urlRegex.test(v);
//   },
//   message: "Invalid URL format",
// };

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },
  title: String,
  content: String,
  creationDate: Date,
  rating: Number,
  relevant: Boolean,
  tags: String,
  avatar: {
    type: String,
    // validate: urlValidator,
  },
  image: {
    type: String,
    // validate: urlValidator,
  },
});

const Post = mongoose.model("posts", postSchema);

module.exports = { Post, postSchema };
