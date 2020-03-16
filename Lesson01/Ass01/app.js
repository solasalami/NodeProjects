const http = require('http');
const route  = require('./route');

const server = http.createServer( route
    //process.exit();
)

server.listen(3000);

console.log("Server Started and Listening..")