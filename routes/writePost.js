var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewWritePost = function(req, res){
  res.render('writePost', data);
};
