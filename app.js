const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT | 5000;

app.use(express.json());

mongoose
  .connect(process.env.ALUZ_URI)
  .then(() => console.log("conected to MongoDB"))
  .catch((err) => console.error(err));
app.get("/", (req, res) => {
  res.send("dev-to");
});
