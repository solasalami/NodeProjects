const express = require('express');

const app = express();



app.use("/users",(req,res,next) => {
    console.log("I am in Middleware 2");
    res.send("<h3>Users List </h3>");
});


app.use("/",(req,res,next) => {
    console.log("I am in Middleware 1");
    res.send("<h3>Home Page </h3>");
});


app.listen(4000);

console.log("Server Started ...");