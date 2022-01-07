// Pull in app.js
const app = require('./app')
//get config dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3003;

//Tell your server to start!
app.listen (PORT, () => console.log(`Running on port ${PORT}`))