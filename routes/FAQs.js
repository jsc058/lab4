var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewFAQ = function(req, res){
  res.render('FAQs', data);
};
