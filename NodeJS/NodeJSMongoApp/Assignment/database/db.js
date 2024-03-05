const mongoose = require("mongoose");
const config = require("../config/config");

const localDBURI = "mongodb+srv://sra:4Osya0s1G6RKnS0R@cluster0.ooycmp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Update this with your local MongoDB URI

mongoose.connect(localDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connection is established");
}).catch((err) => {
  console.log("Error while connecting to the database:", err);
});