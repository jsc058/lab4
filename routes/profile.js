var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewProfile = function(req, res){
  res.render('profile', data);
};
