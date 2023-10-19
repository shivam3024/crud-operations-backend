const express = require("express");

const {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteuser,
} = require("../controller/userController.js");

const route = express.Router();

route.post("/add", addUser);
route.get("/all", getUsers);
route.get("/:id", getUser);
route.put("/:id", editUser);
route.delete("/:id", deleteuser);
module.exports = route;
