// Message board Server


// ====== IMPORTS ======

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


// ====== SETUP ======

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));


// ====== MIDDLEWARE ======

app.use(express.static('public'));


// ====== ROUTES ======

app.get('/', (req, res) => {
    res.render('index/index.ejs');
});


// ====== LISTENERS ======

app.listen(port, () => {
    console.log('Listening on port ' + port);
})