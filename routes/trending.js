var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewTrending = function(req, res){
  res.render('Settings', data);
};
