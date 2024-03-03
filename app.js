const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./src/routes/posts");
const userRoutes = require("./src/routes/users");
const connect = require("./src/database");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.ALUZ_URI)
  .then(() => console.log("conected to MongoDB"))
  .catch((err) => console.error(err));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) =>
  res.json({ success: true, message: "Abandon all hope, ye who enter here." })
);
app.listen(port, () => console.log(`listening on  http://localhost:${port}`));
