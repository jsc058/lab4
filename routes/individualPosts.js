var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewIndPosts = function(req, res){
  res.render('individualPosts', data);
};
