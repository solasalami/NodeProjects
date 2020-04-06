const express = require('express');

const router = express.Router();


router.get("/add-product",(req,res,next) => {
    
    console.log("Inside Middleware 2");
    res.send("<h1>Add Products  now</h1>")
});

module.exports = router;