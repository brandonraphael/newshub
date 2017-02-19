var express = require('express')
var app = express();
var request = require('request');
var striptags = require("striptags");
let cheerio = require('cheerio');
let $ = cheerio.load('<h2 class="title">Hello world</h2>');

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

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
