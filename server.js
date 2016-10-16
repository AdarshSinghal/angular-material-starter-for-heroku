var fs = require("fs");
var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/app")); //use static files in ROOT/public folder

app.listen(process.env.PORT || 3000);
