// DEPENDENCIES && Creating Express App
const app = require('express')();

app.get ('/', (req,res) => {
    console.log('Successfully connected to home!')
    res.send("Welcome to Bookmarks 'R' Us")
    })

//Export our app for 'server.js'
module.exports = app;