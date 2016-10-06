'use strict';
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
var fs = require('fs');
var jsonfile = require('jsonfile');

const PORT=8080;

app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(__dirname + "/idea_board.html");
});

app.get("/data*sheet", function (req, res) {
		console.log("Got a data request");
    res.sendFile(__dirname + "/ideas.json");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post("/write*data", function (req, res) {
  console.log(req.body);
  jsonfile.writeFile("ideas.json", req.body, function (err) {
  console.error(err)
})
});


console.log("Listening");
app.listen(PORT);
