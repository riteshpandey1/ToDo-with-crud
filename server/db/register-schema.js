const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  st_fname: {
    type: String,
    required: true,
  },
  st_lname: {
    type: String,
    required: true,
  },
  st_phone: {
    type: Number,
    required: true,
    unique: true,
  },
  st_city: {
    type: String,
    required: true,
  },
  st_email: {
    type: String,
    required: true,
    unique: true,
  },
  st_password: {
    type: String,
    required: true,
    unique: true,
  },
});

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;
