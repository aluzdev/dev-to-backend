const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./src/routes/posts");
const userRoutes = require("./src/routes/users");
const cors = require("cors");

const app = express();
const port = 1337;

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.ALUZ_URI)
  .then(() => console.log("conected to MongoDB"))
  .catch((err) => console.error(err));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`listening on  http://localhost:${port}`));
