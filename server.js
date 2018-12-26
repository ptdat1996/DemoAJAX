// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }



const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require("path");


const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public_html'));

app.listen(port, function () {
  console.log('Web server listening on port 3000');
})



app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get("/loginPage", function (request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/login', (request, response) => {
  var email = request.body.email;
  var password = request.body.password;

  if (email === "abc@gmail.com") {
    if (password === "1") {
      response.json("Login success!");
    }
    else {
      response.json("Wrong password!");
    }
  }
  else {
    response.json("Wrong email!");
  }
  //console.log(email);
  /*var password = request.body.password;*/

  //console.log(email + " " + password);
  //respone.send(JSON.stringify("This is test document!"));
});


app.get('/products/:id', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for a Single Route' })
})
