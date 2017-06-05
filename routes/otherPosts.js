var data = require('../myPosts.json');
//console.log(data);

/*
 * GET home page.
 */

exports.viewOtherPosts = function(req, res){
  console.log(req.params.title);
  var myPosts = data.myPosts[0];
  var replies = myPosts.repliesMsg[0];

  console.log(data.myPosts[0].repliesMsg[0]);

  res.render('individualPosts', {
    'date': myPosts.date,
    'title': req.params.title,
    'message': myPosts.message,
    'repliesNum': myPosts.repliesNum,
    'name': replies.name,
    'theirMsg': replies.theirMsg
  });

};
