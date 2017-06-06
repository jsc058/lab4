var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewBrowse = function(req, res){
  res.render('browse', data);
};
