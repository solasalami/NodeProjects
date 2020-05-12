const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);


app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not Found !</h1>');
    //res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
    res.status(404).render('error', { pageTitle: 'Error - Page Not Found !!' });
});
app.listen(4000);

console.log("Server Started ...");