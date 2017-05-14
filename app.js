
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require('./routes/login');
var contact = require('./routes/Contacts');
var discussion = require('./routes/Discussion');
var faq = require('./routes/FAQs');
var messages = require('./routes/Messages');
var profile = require('./routes/profile');
var settings = require('./routes/Settings');
var support = require('./routes/Support');
var posts = require('./routes/viewPosts');
var indPosts = require('./routes/individualPosts');
var favorites = require('./routes/favorites');
var feedback = require('./routes/feedback');
var other = require('./routes/other');
var recent = require('./routes/recent');
var safety = require('./routes/safety');
var search = require('./routes/search');
var trending = require('./routes/trending');
var wandering = require('./routes/wandering');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.viewLogin);
app.get('/Contacts', contact.viewContact);
app.get('/Discussion', discussion.viewDiscussion);
app.get('/FAQs', faq.viewFAQ);
app.get('/Messages', messages.viewMessage);
app.get('/profile', profile.viewProfile);
app.get('/Settings', settings.viewSettings);
app.get('/Support', support.viewSupport);
app.get('/viewPosts', posts.viewPosts);
app.get('/individualPosts', indPosts.viewIndPosts);
app.get('/favorites', favorites.viewFavorites);
app.get('/feedback', feedback.viewFeedback);
app.get('/other', other.viewOther);
app.get('/recent', recent.viewRecent);
app.get('/safety', safety.viewSafety);
app.get('/search', search.viewSearch);
app.get('/trending', trending.viewTrending);
app.get('/wandering', wandering.viewWandering);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
