var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSearch = function(req, res){
  res.render('Settings', data);
};
