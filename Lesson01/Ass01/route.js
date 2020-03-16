const RequestHandler = (req, res) => {
  
    console.log(req.url);

    const url = req.url;
    const method = req.method;

    if (url === "/") {

        res.setHeader('Content-Type','Text/Html');
        res.write("<html>");
        res.write("<head><title>Welcome</title></head>");
        res.write("<body>");
        res.write("<form action='/create-user' Method='POST'><input type='text' name='username'/>");
        res.write("<input type='submit' value='Submit'/>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/users") {

        res.setHeader('Content-Type','Text/Html');
        res.write("<html>");
        res.write("<head><title>Welcome</title></head>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li>Sola</li><li>Tunde</li><li>Oyenike</li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    
    if ((url === "/create-user") && (method === "POST")) {
        const body =[];
        req.on('data', function (chunk) {
           
            console.log("chunk: ", chunk);
            body.push(chunk);
          });
          req.on('end', function () {
            const parsedBody = Buffer.concat(body).toString();
            console.log("Request Parsed " +  parsedBody);
            
          });

          res.statusCode = 302;
          res.setHeader('Location','/');
          return res.end();

    }

        res.setHeader('Content-Type','Text/Html');
        res.statusCode =404;
        return res.end();
}

module.exports = RequestHandler;