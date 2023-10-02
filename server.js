// Message board Server


// ====== IMPORTS ======

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');


// ====== TEST VARIABLES ======

const messages = [
    {
        user: "Amando",
        text: "Hi there!",
        added: new Date()
    },
    {
        user: "Charles",
        text: "Hello World!",
        added: new Date()
    }
 ];

// ====== SETUP ======

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));


// ====== MIDDLEWARE ======

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

// ====== ROUTES ======

app.get('/', (req, res) => {
    res.render('index.ejs', {messages: messages});
});

app.get('/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/new', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


// ====== LISTENERS ======

app.listen(port, () => {
    console.log('Listening on port ' + port);
})