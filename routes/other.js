var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewOther = function(req, res){
  res.render('Settings', data);
};
