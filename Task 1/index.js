var http = require('http');
var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost:27017/mithunrestapi/");
var db = mongoose.connection;

db.on("error", function(e){
	console.log("Error connection.");
});

db.once("open", function(){
	console.log("Mongodb is connected");
});

var user = new mongoose.Schema({
	user: { type : String},
	pass : { type : String}
});

var userModel = mongoose.model('user', user);

app.get('/insert/:username/:password',function(req,res){
	
	userModel.create({user : req.params.username, pass : req.params.password}, function(err, results){
		res.json(results);
	});
	
	
});

app.get('/show',function(req,res){
	
	userModel.find({},function(err,docs){
		
		res.json(docs);
		
	});
	
});

app.get('/showuser/:user',function(req,res){
	
	if (req.params.user) {
        userModel.find({ user: req.params.user }, function (err, docs) {
            res.json(docs);
        });
    }
	
});

app.get('/updateuser/:user/:updatedata',function(req,res){
	
	if (req.params.user && req.params.updatedata) {
		
        userModel.update({ user:req.params.user },{$set:{user:req.params.updatedata}}, function (err, results) {
            res.json(results);
        });
		
    }
	
});

app.get('/updatemultipleuser/:user/:updatedata',function(req,res){
	
	if (req.params.user && req.params.updatedata) {
		
        userModel.update({ user:req.params.user },{$set:{user:req.params.updatedata}}, function (err, results) {
            res.json(results);
        });
		
    }
	
});

app.get('/removeuser/:deletedata',function(req,res){
	
	if (req.params.deletedata) {
		
        userModel.remove({ user: req.params.deletedata }, function (err, results) {
            res.json(results);
        });
		
    }
	
});

app.get('/removcollection',function(req,res){
	
    userModel.remove(null, function (err, results) {
        res.json(results);
    });
	
});

/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})

*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*
var server = http.createServer(function(req,res){
	
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end("Hello Bappi");
	
});

server.listen(3000,function(){
	
	console.log('Server ready');
	
});

*/