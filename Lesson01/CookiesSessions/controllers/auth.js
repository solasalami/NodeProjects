const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split('=')[1].trim();
    // console.log(isLoggedIn);
    console.log(req.session.isLoggedIn);
    console.log(req.session.user);
    res.render('auth/login', {

        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: req.session.isLoggedIn
    });

};

exports.postLogin = (req, res, next) => {
    //res.setHeader('Set-Cookie', 'isLoggedIn = true; HttpOnly');
    User.findById('5eccc4c812622b308d438c65')
        .then(user => {
            // console.log('User ' + user);
            req.session.user = user;
            req.session.isLoggedIn = true;
            res.redirect("/");
            //next();
        })
        .catch(err => console.log(err));


};