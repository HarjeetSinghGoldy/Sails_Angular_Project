/**
 * SearchController
 *
 * @description :: Server-side logic for managing Searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    searchDoctor : function(req, res, next){
     
        return res.view('Search/searchdoctor',{
        layout: false
    });
    }
	
};

