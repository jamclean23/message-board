// Message board Server


// ====== IMPORTS ======

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


// ====== TEST VARIABLES ======

const messages = [

 ];

// ====== SETUP ======

// Express

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
    res.render('index/index.ejs', {messages: messages});
});

app.get('/new', (req, res) => {
    res.render('new/new.ejs');
});

app.get('/messages', async (req, res) => {
    const result = await retrievePosts();
    res.send(result);
})

app.post('/new', (req, res) => {
    console.log(req.body);
    messages.push({
        user: req.body.user,
        text: req.body.text,
        date: new Date()
    });
    res.redirect('/');
});


// ====== LISTENERS ======

app.listen(port, () => {
    console.log('Listening on port ' + port);
})


// ====== FUNCTIONS ======

async function retrievePosts () {
    
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const mongoConnectionString = `mongodb+srv://jamclean23:${process.env.MONGODB_PASSWORD}@cluster0.wubrpky.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
    const client = new MongoClient(mongoConnectionString, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    let result;

    try {
        const db = client.db('message_board');
        const posts = db.collection('posts');
        result = await posts.find().toArray();
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }

    return result;
}