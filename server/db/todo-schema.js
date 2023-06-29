const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  toData: String,
});
module.exports = mongoose.model("Todo", todoSchema);
