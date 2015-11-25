var http=require("http");
var express=require("express");
var bodyParser=require("body-parser");
var mysql=require('mysql');
var app=express();


app.set('port',process.env.PORT || 5000);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : '',
	password :'' ,
	database :'' 
})

// connection.connect();

app.get('/',express.static(__dirname)); //serves index.html
app.use(express.static('public'));

http.createServer(app).listen(app.get('port'),function(){
	console.log("server is running for faster moodi on port 5000");
});

