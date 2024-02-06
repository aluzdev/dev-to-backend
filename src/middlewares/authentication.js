const jwt = require("jsonwebtoken");
const JWT_SIGN = process.env.JWT_SIGN;

async function createJWT(data) {
  return jwt.sign(data, JWT_SIGN, { expiresIn: "7d" });
}

function verifyJWT(req, res, next) {
  try {
    const token = req.headers["bearerauth"];
    const now = new Date();
    if (!token) {
      res.status(401).send({ msg: "login required" });
    }
    jwt.verify(token, JWT_SIGN, (err, decode) => {
      if (err) res.status(401).send({ msg: "invalid token" });
      const tokenExpired = decode.exp < now.getDate() / 1000;
      if (tokenExpired) {
        res.status(401).send({ msg: "session expired" });
      }
      req.user = decode;
      next();
    });
  } catch (err) {
    res.status(401).send({ msg: "invalid token", error: err });
  }
}

module.exports = {
  createJWT,
  verifyJWT,
};
