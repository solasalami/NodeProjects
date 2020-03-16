const http = require('http');



const server = http.createServer((req,res) => {
    
    console.log(req.url, req.method , req.headers);

    const person ={
        name:"Sola Salami",
        Age: 37
    };

    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(person));
    res.end();
   // process.exit();
});

server.listen(3000);

console.log("Server Started ...")