const express = require('express');
const path = require('path');
const FilePath = require('../utils/path.js');

const route = express.Router();

route.use("/users", (req, res, next) => {

    res.sendFile(path.join(FilePath, "views", "users.html"));
});

module.exports = route;