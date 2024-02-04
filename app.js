const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./routes/posts");

const app = express();
const port = process.env.PORT | 5000;

app.use(express.json());

mongoose
  .connect(process.env.ALUZ_URI)
  .then(() => console.log("conected to MongoDB"))
  .catch((err) => console.error(err));

app.use(postRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));
