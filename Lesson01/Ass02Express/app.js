const express = require('express');

const app = express();

const adminRoute = require('./routes/admin');

app.use(adminRoute);

app.use("/",(req,res,next) => {
    
    console.log("Inside Middleware 2");
    res.send("<h1>Hello World </h1>")
});

app.listen(3000);


console.log("Server Started and Listening..");