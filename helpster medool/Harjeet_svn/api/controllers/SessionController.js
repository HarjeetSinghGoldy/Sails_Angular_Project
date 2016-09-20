/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    'new': function(req, res){
       
        var oldDateObj = new Date();
        var newDateobj = new Date(oldDateObj.getTime() + 60000); //adding 60sec into the oldDateObj to Create newDateObj
        req.session.cookie.expires = newDateobj;
        
        req.session.authenticated = true; //new action create by requesting sesstion
        console.log(req.session);
        console.log(new Date());
        
        res.view('session/new');
    }
    
	
};

