const jwt = require("jsonwebtoken");
const JWT_SIGN = process.env.JWT_SIGN;
const User = require("../models/users");

async function createJWT(data) {
  return jwt.sign(data, JWT_SIGN, { expiresIn: "7d" });
}

function verifyJWT(req, res, next) {
  let token = req.headers.authorization;
  const dateNow = new Date();

  if (!token) {
    return res.status(401).json({ msg: "login is required" });
  }

  token = token?.split(" ")[1];
  jwt.verify(token, JWT_SIGN, async (err, decode) => {
    if (err) {
      return res.status(401).json({ msg: "token invalid" });
    }
    if (decode.exp < dateNow.getDate() / 1000) {
      return res.status(401).json({ msg: "session expired" });
    }

    // Set the user in the request object
    req.user = await User.findById(decode._id);

    next(); // Continue to the next middleware or route handler
  });
}

module.exports = {
  createJWT,
  verifyJWT,
};

module.exports = {
  createJWT,
  verifyJWT,
};
