var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewMessage = function(req, res){
  res.render('Messages', data);
};
