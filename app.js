var express=require('express');
var app=express();

var port=3000;
var server=app.listen(port,function(){
	console.log('listening on port %d',port);
});

app.set('view engine','ejs');
var path=__dirname+'/views/';
console.log("path",path);

app.get('/',function(err,res){
	res.render(path + 'index');
});

var webroutes=require("./routes/routes.js");
var webroutes=new webroutes(app);
webroutes.init();