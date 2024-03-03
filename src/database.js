const mongoose = require("mongoose");

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
  return mongoose.connect(url);
}

module.exports = { connect };
