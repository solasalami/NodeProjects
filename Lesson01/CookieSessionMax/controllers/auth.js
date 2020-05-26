const User = require('../models/user');


exports.getLogin = (req, res, next) => {
    //   const isLoggedIn = req
    //     .get('Cookie')
    //     .split(';')[1]
    //     .trim()
    //     .split('=')[1] === 'true';
    console.log("Req Sess User = > " + req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('5ecc39c4f6dc732f83ca9ea9')
        .then(user => {
            req.session.isLoggedIn = true;
            console.log("After Setting Sess User = > " + req.session.isLoggedIn);
            req.session.user = user;
            console.log("After Setting  User = > " + req.session.user);
            req.session.save(err => {
                console.log(err);
                res.redirect('/');

            })

            //next();
        })
        .catch(err => console.log(err));


};

exports.postLogout = (req, res, next) => {

    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');

    })
};