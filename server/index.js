const express = require("express");
const cors = require("cors");
const server = express();

require("./db/conection");
const Register = require("./db/register-schema");
const Todo = require("./db/todo-schema");

server.use(cors());
const port = "8000";
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

//  Add Register Data Into DataBase.........
server.post("/insert-register-data", async (req, res) => {
  let register = new Register(req.body);
  let result = await register.save();
  res.send(result);
});

//  Compare of Email and Password into DataBase.........
server.post("/compare-data", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const studentEmail = await Register.findOne({ st_email: email });
    // console.log(studentEmail.st_fname)

    if (password === studentEmail.st_password) {
      res.json(200, { data: email, name: studentEmail.st_fname });
      res.end();
    } else {
      res.send("password are not matching");
    }
  } catch (error) {
    res.status(400).send("invalid login details");
  }
});

//  Add Todo Data Into DataBase.........
server.post("/insert-data", async (req, res) => {
  let todo = new Todo(req.body);
  let result = await todo.save();
  res.send(result);
});

//  Read Todo Data From DataBase.........
server.get("/read-data", async (req, res) => {
  let result = await Todo.find(req.body);
  res.send(result);
});

// Delete Todo Data Into Database.......
server.delete("/delete-data/:id", async (req, res) => {
  let result = await Todo.deleteOne({ _id: req.params.id });
  res.send(result);
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
