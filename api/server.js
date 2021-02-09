const express = require('express');
const server = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
db = mongoose.connection;
db.on('error', (error) => console.log(`error: ${error}`));

server.get('/', (req, res) => {
  res.send('here is the server\n');
});

module.exports = server;
