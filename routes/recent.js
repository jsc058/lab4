var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewRecent = function(req, res){
  res.render('recent', data);
};
