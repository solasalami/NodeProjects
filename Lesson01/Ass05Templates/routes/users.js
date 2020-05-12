const express = require('express');
const usersList = require('./admin')
const route = express.Router();


let users = [];

users = usersList.users;

route.get('/', (req, res, next) => {
    console.log("User List Retrieved ==> " + users);
    res.render('users', { pageTitle: "Home", user: users });

});




exports.route = route;