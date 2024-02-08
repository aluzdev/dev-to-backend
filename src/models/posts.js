const mongoose = require("mongoose");

// const urlValidator = {
//   validator: (v) => {
//     const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
//     return urlRegex.test(v);
//   },
//   message: "Invalid URL format",
// };

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      require: true,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "user",
    },
    avatar: {
      type: String,
      // validate: urlValidator,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    // creationDate: Date,
    rating: {
      type: String,
    },
    relevant: {
      type: Boolean,
    },
    tags: {
      type: String,
    },
    image: {
      type: String,
      // validate: urlValidator,
    },
  },

  { timestamps: { createdAt: true, updatedAt: true } }
);

const Post = mongoose.model("posts", postSchema);

module.exports = { Post, postSchema };
