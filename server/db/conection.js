const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/todo-app")
.then(() =>{
    console.log("connection sucssesful");
}).catch((err)=>{
    console.log(err);
})