var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewWandering = function(req, res){
  res.render('wandering', data);
};
