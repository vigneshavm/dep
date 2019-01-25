console.log("routes");

var action=require('../action/action.js');

var UIRoutes=function(app){
    this.app=app;
    this.actionInstance=new action(app);
};

module.exports=UIRoutes;

UIRoutes.prototype.init=function(){

  var self=this;
  var app=this.app;



	app.get('/register',function(req,res){

	  	console.log("insert is clicked");
	 	  var request=req.query;
        console.log("insert request",request);
     	
      self.actionInstance.register(request,function(error,response){
            
            // self.actionInstance.find(request,function(err,result){
            //     console.log("response in routes",result);
            //     res.render('commend.ejs',{user:result});
            // });

        });
    });
    app.get('/find',function(req,res){

      console.log("insert is clicked");
      var request=req.query;
        console.log("insert request",request);
          self.actionInstance.find(request,function(err,result){
              res.render('commend.ejs',{user:result});
          });

        });
    app.get('/command',function(req,res){

      console.log("insert is clicked");
      var request=req.query;
        console.log("insert request",request);
          self.actionInstance.findcmd(request,function(err,result){



              res.render('commend.ejs',{user:result});
          });

    });



    app.get('/findallcmd',function(req,res){

      console.log("insert is clicked");
      var request=req.query;
        console.log("insert request",request);
          self.actionInstance.findallcmd(request,function(err,result){
              res.send(result);
          });

        });

};