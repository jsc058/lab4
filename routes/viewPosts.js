var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewPosts = function(req, res){
  res.render('viewPosts', {
    'projectsPosts': [
      { 'title': "My Mother's Progress",
        'numberBlue': '3',
        'numberGreen': '17',
        'id':'projectPost1'
      },
      { 'title': 'How do I keep my job',
        'numberBlue': '1',
        'numberGreen': '20',
        'id': 'projectPost2'
      },
      { 'title': 'My siblings are not helpful',
        'numberBlue': '2',
        'numberGreen': '13',
        'id': 'project3'
      },
      { 'title': 'I feel alone',
        'numberBlue': '7',
        'numberGreen': '30',
        'id': 'project4'
      },
      { 'title': 'New caregiver',
        'numberBlue': '9',
        'numberGreen': '15',
        'id': 'projectPost5'
      }
    ]
  });
};
