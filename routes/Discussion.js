var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewDiscussion = function(req, res){
  res.render('Discussion', data);
};
