const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
    },
    relevant: {
      type: Boolean,
    },
    reactions: {
      type: Number,
    },
    comments: {
      type: Number,
    },
    tags: {
      type: [],
    },
    coverImage: {
      type: String,
    },
  },

  { timestamps: { createdAt: true, updatedAt: true } }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
