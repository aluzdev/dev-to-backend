const mongoose = require("mongoose");

const urlValidator = {
  validator: (v) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(v);
  },
  message: "Invalid URL format",
};

const postSchema = new mongoose.Schema({
  post: {
    author: String,
    title: String,
    content: String,
    creationDate: Date,
    rating: Number,
    relevant: Boolean,
    tags: String,
    avatar: {
      type: String,
      validate: urlValidator,
    },
    image: {
      type: String,
      validate: urlValidator,
    },
  },
});

module.exports = mongoose.model("Post", postSchema);
