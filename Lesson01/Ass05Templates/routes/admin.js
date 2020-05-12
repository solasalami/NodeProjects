const express = require('express');

const route = express.Router();

const users = [];

route.get('/add-user', (req, res, next) => {

    res.render('add-user', { pageTitle: 'Users' });

});

route.post('/add-user', (req, res, next) => {

    console.log(req.body);
    users.push({ userName: req.body.title });
    console.log("Pushed Products =>> " + users);
    //res.redirect('/');
    res.render('users', { pageTitle: 'Users', user: users });
});



exports.route = route;
exports.users = users;