const { set } = require("mongoose");
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
      let newUser = req.body;
      const user = await User.findOne({ email: newUser.email });
      if (user) {
        return res.status(201).send(`user already exists`);
      }
      newUser.password = await User.encryptPassword(newUser.password);
      const data = await User.create(newUser);
      await data.save();

      console.log(`User saved successfuly:`, data);
      res.status(201).send(data);

      console.log(data);

      
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err, msg: "Could not create user!" });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        res.status(401).send({ msg: "user not found" });
      } else {
        res.send({ msg: "user", data: user });
      }
    } catch (error) {
      res.status(400).send({ msg: "can not get user", error: error });
    }
  },

  userLogin: async (req, res) => {
    //qué queremos lograr?
    //para qué queremos el login del backend?
    //para que nos envie en el response el token al front
    //cómo le vamos a hacer para regresar el token a front?
    //lo metemos al response
    //fuga a encontrar dónde se hace el token
    //agregarlo al response
    try {

      const credential = req.body;
      const user = await User.findOne({ email: credential.email });
      if (!user) {
        res.status(401).send({ msg: "user not found" });
      }
      const isCorrectPassword = await User.isValidPassword(
        credential.password,
        user.password
      );
      

      if (!isCorrectPassword) {
        res.status(401).send({ msg: "invalid password" });
      } else {
        const token = await createJWT({ _id: user._id });

        console.log({ token });
        res.send({ msg: "user succesfuly logged in", data: token });
        console.log(data,"datatoken")
      }
    } catch (err) {
      res.status(400).send({ msg: "invalid login", error: err });
    }
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      } else {
        console.log(`deleted user sucesfully:`, user);
        res.status(200).send({ msg: "deleted user sucesfully" });
      }
    } catch (err) {
      res.status(500).send({ error: err, msg: "Could not deletete user!" });
    }
  },
};
