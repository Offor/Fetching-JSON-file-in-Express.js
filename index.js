var express = require("express");
var app = express();


var lessons = [
    {'topic': 'math', 'location': 'London', 'price': 100 },
    {'topic': 'math', 'location': 'Liverpool', 'price': 80 },
    {'topic': 'math', 'location': 'Oxford', 'price': 90 },
    {'topic': 'math', 'location': 'Bristol', 'price': 120 },
];

var user = [
    {'email': 'user@email.com', 'password':'mypassword'},
];

app.get("/lessons", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(lessons));
});

app.get("/user", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(user));  
});



app.listen(3000, function() {
    console.log("App runing at Localhost:3000")
});