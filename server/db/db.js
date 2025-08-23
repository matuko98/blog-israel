const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

const url = process.env.MONGO_URI;
const port = process.env.PORT;

console.log("Loaded MONGO_URI =", process.env.MONGO_URI);

const createDb = async () => {
  try {
    console.log("MONGO_URI from .env:", url);

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to db");
  } catch (error) {
    console.error("Error connecting to Mongodb:", error.message);
    precess.exit(1);
  }
};

module.exports = createDb;
