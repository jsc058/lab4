var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewResources = function(req, res){
  res.render('Resources', data);
};
