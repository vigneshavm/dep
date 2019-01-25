console.log("action");

var async = require('async')

var service=require('../service/service.js');
var Object=require('../defaultJson/test.json');

var action=function(app) {
   this.app=app;
   this.apiserviceInstance=new service(app);
};
module.exports=action;

action.prototype.register=function(request,callback){

    var reqobj=request;
    
    console.log('insert request object',reqobj);

     

    var self=this;
   
    self.apiserviceInstance.insert(reqobj,function(error,response){

	    callback(error,response);

    });
}

action.prototype.find=function(request,callback){

    var reqobj=request;

    var self=this;
   
    var resultArray =[ {
        name: 'Vigneshavm',
        email: 'avmvignesh0207@gmail.com' } ];


    var d = new Date();
    var current = d.getTime();



    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
        }

        else {
            return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
        }
    }



    async.forEach(Object, function (item, callback){

        item['timeago'] = timeDifference(current,item.timestamp);

        callback();

    }, function(err) {


var data= Object;

        function myFunction() {
            data.sort(function(a, b){return    b.timestamp - a.timestamp});
        }

        var m = myFunction();

        callback(null,data);
    });



};

action.prototype.command=function(request,callback){

    var reqobj=request;

    var self=this;
   

        callback(null
       ,null);

};

action.prototype.findcmd=function(request,callback){

    var self=this;
    var reqobj=request;

console.log("reqobj findcmdfindcmdfindcmd",reqobj)

    var d = new Date();
    var current = d.getTime();

    var resultArray =
    {
        "index": 2,
        "commands_count": 0,
        "name": reqobj.name,
        "like": 0,
        "timestamp" :current,
        "commands": reqobj.command

    };

    Object.push(resultArray)

    var data= Object;

    function myFunction() {
        data.sort(function(a, b){return  b.timestamp - a.timestamp});
    }




        callback(null,data);

};

action.prototype.findallcmd=function(request,callback){

    var reqobj=request;

    var self=this;


    async.forEachOf(Object, function (value, key, callback) {

console.log(key,"key");

        console.log(  value.commands_by)

        var m=value.commands_by

        if (key == request.index) {
            m.push( {
                "name": 'You',
                "command": request.command
            })
        }
        value.commands_by == m
        callback(null,null);

    }, function(err) {

        callback(null, Object);
    })

};