const mongoose = require("mongoose");

// const urlValidator = {
//   validator: (v) => {
//     const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
//     return urlRegex.test(v);
//   },
//   message: "Invalid URL format",
// };

<<<<<<< HEAD
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
=======
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
>>>>>>> 568220d40a7d707c7d8cce0f8d261aec7f656d14

const Post = mongoose.model("posts", postSchema);

module.exports = { Post, postSchema };
