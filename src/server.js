// definicion del servidor
const express = require("express");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/posts", postRoutes);
server.use("/users", userRoutes);

server.get("/", (req, res) =>
  res.json({ success: true, message: "Abandon all hope, ye who enter here." })
);

module.exports = server;
