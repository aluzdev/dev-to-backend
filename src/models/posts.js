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
      // type: String,
      // require: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    // avatar: {
    //   type: String,
    //   // validate: urlValidator,
    // },
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
      type: String
    }
  },

  { timestamps: { createdAt: true, updatedAt: true } }
);

// module.exports = mongoose.model("Post", postSchema);
const Post = mongoose.model("posts", postSchema);

module.exports = Post;
