const express = require('express');
const bodyparser = require('body-parser');
const adminRoute = require('../Ass05Templates/routes/admin');
const userRoute = require('../Ass05Templates/routes/users');
const path = require('path');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoute.route);
app.use(userRoute.route);

app.use((req, res, next) => {

    res.render('error', { pageTitle: 'Error' });
});

app.listen(5500);

console.log("Server started !....")