require('dotenv').config();
const mongoose = require('mongoose');

// Mongo connection
console.log(process.env.MONGO_URI);
//add ATLAS_URI here as option for connection when deployed
mongoose.connect(process.env.MONGO_URI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

// Mongoose connection object
const db = mongoose.connection;

// set up an event listener to fire once when the connections 'opens'
// console log what host and port it's running on
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database error\n${error}`);
});

//exports of the different schemas/models
module.exports.User = require('./User');
module.exports.BBombData = require('./BBombData');