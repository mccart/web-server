var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function (req, res, next) {
    console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
}

// log every request to console
app.use(middleware.logger);

// auth every page
// app.use(middleware.requireAuthentication);

// or just auth /about page
app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us');
});

// console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});