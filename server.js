// server.js
// where your node app starts

// init project
var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'upload/' })
 
var app = express()
 
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  var size = req.file.size;
  var params = req.params;
  console.log(params);
  
  var result = {}
  result["size"] = size;
  
  res.json(result);
  
})

