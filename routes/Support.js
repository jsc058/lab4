var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSupport = function(req, res){
  res.render('Support', data);
};
