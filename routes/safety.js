var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSafety = function(req, res){
  res.render('safety', data);
};
