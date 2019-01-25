console.log("service");
var service=function(app){
	this.app=app;
};
module.exports=service;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

service.prototype.insert=function(reqobj,callback){
    var userrequest=reqobj;
    console.log(userrequest);
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("customer").insertOne(userrequest, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	    callback(err,res);
	  });
	});
};

service.prototype.find=function(reqobj,callback){
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customer").find({}).sort({_id:-1}).limit(1).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    db.close();
	    callback(err,result);
	  });
	});
};
service.prototype.command=function(reqobj,callback){
    var userrequest=reqobj;
    console.log(userrequest);
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("customer").insertOne(userrequest, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	    callback(err,res);
	  });
	});
};

service.prototype.findcmd=function(reqobj,callback){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customer").find({}).sort({_id:-1,command:1}).limit(1).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    db.close();
	    callback(err,result);
	  });
	});
};

service.prototype.findallcmd=function(reqobj,callback){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customer").find({} , {projection:{_id:0,name:1,command:1}}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    db.close();
	    callback(err,result);
	  });
	});
};