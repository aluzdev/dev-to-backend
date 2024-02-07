const { createJWT } = require("../middlewares/authentication");
const User = require("../models/users");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.error(err);
      res.status(400).send({ error: err, msg: "Could not get users!" });
    }
  },

  createUser: async (req, res) => {
    try {
      const data = await User.create(req.body);
      await data.save();

      console.log(`User saved successfuly:`, data);
      res.status(201).send(data);

      console.log(data);
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err, msg: "Could not create post!" });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.send({ msg: "user", data: user });
    } catch (error) {
      res.status(400).send({ msg: "can not get user", error: error });
    }
  },

  userLogin: async (req, res) => {
    try {
      const credential = req.body;
      const user = await User.findOne({ email: credential.email });
      if (!user) {
        res.status(401).send({ msg: "user not found" });
      }
      if (user.password != credential.password) {
        res.status(401).send({ msg: "invalid password" });
      } else {
        const token = await createJWT({ _id: user._id });
        console.log({ token });
        res.send({ msg: "login user", data: token });
      }
    } catch (err) {
      res.status(400).send({ msg: "invalid login", error: err });
    }
  },
};
