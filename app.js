// DEPENDENCIES && Creating Express App
const app = require('express')();
const bookmarksController = require('./controllers/bookmarksController');

app.use('/bookmarks', bookmarksController);

// Delegate everything that starts with 'bookmarks' to the bookmarks controller.
// .use takes in two args:
// - the subroute for the controller to hand
// - the controller that should handle it
// Read as a sentence: "for any rounte that starts with "/bookmarks", use the bookmarks controller."

app.get('/', (req, res) => {
  console.log('Successfully connected to home!');
  res.send("Welcome to Bookmarks 'R' Us");
});

//Export our app for 'server.js'
module.exports = app;
