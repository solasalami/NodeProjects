const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminRoutes = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    //res.send('<h1>Hello from Express !</h1>')
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminRoutes.products;

    res.render('shop', { pageTitle: 'Home', prods: products });
});

module.exports = router;