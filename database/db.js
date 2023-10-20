const mongoose = require("mongoose");

const connection = async (DBURL) => {
  const URL = DBURL;
  // const URL = "mongodb://localhost:27017/UserData";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
module.exports = connection;
