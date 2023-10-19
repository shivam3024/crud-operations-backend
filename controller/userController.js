const User = require("../schema/userSchema.js");
const addUser = async (req, res) => {
  const users = req.body;
  const newUser = new User(users);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: message.error });
  }
};

const getUser = async (req, res) => {
  try {
    // const user = await User.find({ _id: req.params.id });
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: message.error });
  }
};

const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteuser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = { addUser, getUsers, getUser, editUser, deleteuser };
