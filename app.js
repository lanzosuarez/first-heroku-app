var express = require('express');
var path = require('path');
var app = express();



//Without static path
// app.get('', function (req, res) {
//   //let absPath=path.join(__dirname,"index.html");
//   //res.sendFile(absPath);
//   res.sendFile("index.html",{"root":__dirname});
// })

// app.get('/about', function (req, res) {
//   // let absPath=  `path.join(__dirname,"about.html");
//   // res.sendFile(absPath);
//    res.sendFile("about.html",{"root":__dirname});
// })

// app.get('/services', function (req, res) {
//   // let absPath=path.join(__dirname,"services.html");
//   // res.sendFile(absPath);
//    res.sendFile("services.html",{"root":__dirname});
// })



// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
// let express = require("express");
// let app = express();
    
// app.use(express.static(path.join(__dirname,"public")));


var express = require("express");
    var app = express();

    app.get('/', function(req, res) {
      //res.send('Hello World!');
      res.sendFile("index.html",{"root":__dirname});
  });

    var port = Number(process.env.PORT || 5000);
    app.listen(port, function() {
      console.log("Listening on " + port);
    });



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });