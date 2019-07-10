/* Setting */
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

/* Main route sends our HTML file */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);

console.log('server is running at http://localhost:' + PORT);
process.on('uncaughtException', e => {
  console.log(e);
});
