var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

module.exports = app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));

console.log(__dirname, "dirname")
var rootPath = path.join(__dirname, '../../');
var publicPath = path.join(rootPath, './public')
var nodeModulesPath = path.join(rootPath, './node_modules')
app.use(express.static(publicPath))
app.use(express.static(nodeModulesPath))

app.use(function(req,res,next){
	console.log(req.method, '/', res.statusCode)
	next();
})

app.get('/', function(req,res){
	res.sendFile(publicPath + '/index.html')
})


// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});