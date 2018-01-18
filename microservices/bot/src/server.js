var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Octokat = require('octokat');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var octo = new Octokat({
  username: "dk-learner",
  password: "deepti2002"
});

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World, I am a bot.")
});

app.post('/webhook/', function(req, res) {
  console.log(JSON.stringify(req.body));
  if (req.body.action === 'closed') {
    var params= {
      "body": "Me too"
    };
    octo.repos(req.body.repository.owner.login, req.body.repository.name).issues(req.body.issue.number).comments.create(params);
  } else {
    console.log('Error: Not a page object');
  }
  res.sendStatus(200);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
