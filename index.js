const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./database/db.js");
const route = require("./routes/route.js");
const app = express();
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);
const PORT = process.env.PORT_SERVER;

connect(username, password);
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
