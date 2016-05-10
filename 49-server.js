var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./49-middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us');
});

// console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});