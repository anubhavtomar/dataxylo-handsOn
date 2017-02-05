/**
 * PicturesController
 *
 * @description :: Server-side logic for managing pictures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getPictures:function(req , res){
		console.log('anubhav got API');
		Pictures.find().exec(function(err, data) {
            if (err) {
              return res.ok(err);
            }
            res.ok(data);  
		});
	}

};

