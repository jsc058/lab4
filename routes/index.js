
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Messages',
        'image': '../images/message.png',
        'id':'project1'
      },
      { 'name': 'Discussion',
        'image': '../images/bubble.png',
        'id': 'project2'
      },
      { 'name': 'Contacts',
        'image': '../images/contacts.png',
        'id': 'project4'
      },
      { 'name': 'Settings',
        'image': '../images/settings.png',
        'id': 'project5'
      },
      { 'name': 'FAQs',
        'image': '../images/help.png',
        'id': 'project6'
      }
    ]
  });
};
