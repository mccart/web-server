var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
//   res.send('Hello Express!');
// });
// use index.html in /public instead

app.get('/about', function (req, res) {
  res.send('About Us');
});

// console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});