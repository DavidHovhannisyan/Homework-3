const http = require('http');
http.createServer(function (req, res) {
    if (req.url === '/hello') {
        res.end('<h1 style="text-align: center"> Hello World </h1>');
    } else if (req.url === "/Mamikon") {
        res.end('<h1 style="text-align: center"> Hello Mamikon :) </h1>');
    } else if (req.url === "/Varazdat") {
        res.end('<h1 style="text-align: center"> Hello Varazdat :) </h1>');
    } else if (req.url === "/Xachik") {
        res.end('<h1 style="text-align: center"> Hello Xachik :) </h1>');
    }  else if (req.url === "/Ghevond") {
        res.end('<h1 style="text-align: center"> Hello Ghevond :) </h1>');
    }

}).listen(3001);