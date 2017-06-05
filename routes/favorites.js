var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewFavorites = function(req, res){
  res.render('favorites', data);
};
