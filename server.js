const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//set up handler
app.get('/', (req, res) => {
  res.send('<h1>hello Express!</h1>');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {

  res.send({
    errorMessage: 'Unable to handle request'
  });
});

//Bind application to a port on our machine
//change port variable for heroku, removed port 3000.
app.listen(port, () => {
  console.log(`ATOS: Server is up and running on ${port}`);
});
