var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
buf = new Buffer(256);


app.get('/', function(request, response)
{
  response.send(console.log(buf.toString(fs.readFile(index.html))));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
