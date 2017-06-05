var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewFeedback = function(req, res){
  res.render('feedback', data);
};
