const express = require('express');
const feedRoutes = require('./routes/feed');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Solve CORS Issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);