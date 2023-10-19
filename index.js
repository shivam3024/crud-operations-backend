const express = require("express");
const cors = require("cors");
const connect = require("./database/db.js");
const route = require("./routes/route.js");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);
const PORT = 8000;

connect();
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
