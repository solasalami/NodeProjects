const express = require('express');
const path = require('path');
const FilePath = require('../utils/path.js');


const router = express.Router();

router.get("/", (req, res, next) => {

    res.sendFile(path.join(FilePath, 'views', 'home.html'));

});

module.exports = router;