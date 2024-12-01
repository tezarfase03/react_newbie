const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("MongoDB Activated....");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
const schema = new mongoose.Schema({
  title: String,
  description: String
})
const Model = mongoose.model("Model", schema)
module.exports = {
  mongoose,
  Model
}