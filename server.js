// data and the logic to manipulate that data lives on a node server. 
// we have routes that make that data and logic accessible
// we use ajax to access the data and push changes to the client's side

// fist thing we do is to set up our server. 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// app.get("/", function(req, res){
// 	res.send("Hello World");
// });



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use(function(req, res) {
// 	res.setHeader("Content-Type", "text/plain")
// 	res.write("you posted:\n")
// 	res.end(JSON.stringify(req.body, null, 2))
// });

// as a last step, we need to include route paths in this file. 
// this means, include the routes.js file and the 'app' means
// we want to use express. 


// include api routes first. bcoz that's where we are pulling the data from
// to display it in html
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});