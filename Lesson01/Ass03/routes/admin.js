const express = require('express');

const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];


router.get('/add-product', (req, res, next) => {

    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="Submit" >Submit</button></form>');
    res.render('add-product', { pageTitle: 'Add Products to Page' });

});

router.post('/add-product', (req, res, next) => {

    console.log(req.body);
    products.push({ title: req.body.title });
    console.log("Pushed Products =>> " + products);
    //res.redirect('/');
    res.render('shop', { pageTitle: 'Home', prods: products });
});

exports.router = router;
exports.products = products;