const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
//autoIncrement.initialize(mongoose.connection);
//userSchema.plugin(autoIncrement.plugin, "data");
const User = mongoose.model("data", userSchema);

module.exports = User;
