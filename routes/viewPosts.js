var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewPosts = function(req, res){
  res.render('viewPosts', {
    'projectsPosts': [
      { 'title': "My Mother's Progress",
        'numberBlue': '17',
        'numberGreen': '3',
        'id':'projectPost1'
      },
      { 'title': 'How do I keep my job',
        'numberBlue': '2',
        'numberGreen': '1',
        'id': 'projectPost2'
      },
      { 'title': 'My siblings are not helpful',
        'numberBlue': '112',
        'numberGreen': '3',
        'id': 'project3'
      },
      { 'title': 'I feel alone',
        'numberBlue': '17',
        'numberGreen': '3',
        'id': 'project4'
      },
      { 'title': 'New caregiver',
        'numberBlue': '3',
        'numberGreen': '17',
        'id': 'projectPost5'
      }
    ]
  });
};
