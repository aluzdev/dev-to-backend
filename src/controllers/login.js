const { createJWT } = require("../middlewares/authentication");
const User = require("../models/users");

const userLogin = async (req, res) => {
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
};

module.exports = { userLogin };
