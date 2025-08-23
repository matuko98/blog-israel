const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const createDb = require("./db/db");
const userRouter = require("./router/index");

const app = express();
const port = process.env.PORT || 3055;
app.use(express.json());
app.use(cors());

//routes

app.use("/users", userRouter);

const startServer = async () => {
  await createDb();
};

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

startServer();
