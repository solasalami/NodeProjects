const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('../Ass04ExpressJS/routes/home');
const usersRoute = require('../Ass04ExpressJS/routes/users');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.use(homeRoute);

app.use(usersRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});


app.listen(5000);
console.log("Server Started !!");