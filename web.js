#!/usr/bin/env node

var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var filename = "index.html";
var buf = new Buffer(fs.readFileSync(filename));
var out;

buf = fs.readFileSync(filename);
out = buf.toString();

app.get('/', function(request, response)
{
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
