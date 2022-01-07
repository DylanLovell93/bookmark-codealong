// Dependencies
const express = require('express');
const { response } = require('../app');
const bookmarksArray = require('../models/bookmark');
// '.Router' creates a new controller
//that handles a sub-route.
//In this case, it will handle everything
//that starts with '/bookmarks'.

const bookmarks = express.Router();

// Routes
// "/bookmarks" is already assumed because app.js has delegated it to us.
bookmarks.get('/', (req, res) => {
  console.log('Successfully routed to "/bookmarks"!');
  res.json(bookmarksArray);
});

// bookmarks.get('/demo', (req, res) => {
//   console.log('GET request to /bookmarks/demo');
//   res.send('Demo-ed!');
// });

// Export the bookmarks controller/router
// so that  'app' can delegate the '/bookmarks'
// route to it.
module.exports = bookmarks;
