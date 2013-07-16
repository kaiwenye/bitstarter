var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
buf = new Buffer(fs.readFile(index.html);

app.get('/', function(request, response)
{
  response.send(console.log(buf.toString('utf8')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
