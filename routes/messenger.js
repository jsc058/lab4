var data = require('../messages.json');

exports.viewMessenger = function(req, res){
  var name = req.params.name;
  var index = -1;
  var messages = data.messagesList;
  var notify;
  console.log(messages);

  for (var i = 0; i < messages.length; i++) {
    if (messages[i].name == name) {
      index = i;
      notify = messages[i].notify;
      break;
    }
  }

  console.log(index);
  console.log(messages[index].name);
  res.render('messenger', {
    'name': name,
    'message': messages[index].message,
    'notify': notify
  });
};
