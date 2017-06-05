var data = require('../messages.json');

/*
 * GET home page.
 */

exports.viewMessage = function(req, res){
  res.render('Messages', data);
};
