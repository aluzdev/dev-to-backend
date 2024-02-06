const User = require("../models/users");

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find();
    res.send(users);
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
};
