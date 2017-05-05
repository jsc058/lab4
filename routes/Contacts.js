var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewContact = function(req, res){
  res.render('Contacts', data);
};
