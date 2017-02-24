var express = require('express')
var app = express();
var request = require('request');
var striptags = require("striptags");
var bodyParser = require('body-parser');
let cheerio = require('cheerio');
let $ = cheerio.load('<h2 class="title">Hello world</h2>');
const MongoClient = require('mongodb').MongoClient
var db;

app.use(bodyParser());

MongoClient.connect('mongodb://admin:admin@ds157439.mlab.com:57439/newshub', (err, database) => {
  if (err) return console.log(err);
  db = database;

  app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
  })
})

app.post('/comments', function (req, res) {
  db.collection(String(req.body.url)).save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('http://localhost:3000/#/' + req.body.url.substring(0, req.body.url.length - 8) + "/comments")
  })
})

app.get('/comments', function (req, res) {
  db.collection('AnabrazoontheUSMexicanbordercelebratesunitybutTrumphasLaredoworriedcomments').find(null, (err, result) => {
    if (err) return console.log(err)
    console.log(result);
  });
  // console.log(req);
})

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.get('/', function (req, res) {
  res.send("check");
})

app.get('/abc-news-au', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/ars-technica', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/associated-press', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/bbc-news', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/bbc-sport', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/bild', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=bild&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/bloomberg', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/business-insider', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/business-insider-uk', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/buzzfeed', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/cnbc', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/cnn', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/daily-mail', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/engadget', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/entertainment-weekly', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/espn', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/the-guardian-uk', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/the-new-york-times', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/the-wall-street-journal', function (req, res) {
  var articleLink = ' https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})

app.get('/the-washington-post', function (req, res) {
  var articleLink = 'https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=75068dfcd79b413186fa380de6150f1e';
  request(articleLink, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      res.send("Error");
    }
  })
})
