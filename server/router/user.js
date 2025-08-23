const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user");
const AuthController = require("../services/auth");
userRouter.post("/addUser", userController.createUser);
userRouter.post("/signin", AuthController.login);
userRouter.post("/logout", AuthController.logout);
module.exports = userRouter;
