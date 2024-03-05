const mongoose = require("mongoose");
const config = require("../config/config");

const localDBURI = "mongodb://localhost:27017/Zeeshan"; // Update this with your local MongoDB URI

mongoose.connect(localDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connection is established");
}).catch((err) => {
  console.log("Error while connecting to the database:", err);
});