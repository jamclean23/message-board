// Message board Server


// ====== IMPORTS ======

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const mongoConnectionString = `mongodb+srv://jamclean23:${process.env.MONGODB_PASSWORD}@cluster0.wubrpky.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

// Mongoose
const mongoose = require('mongoose');


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
    res.render('index/index.ejs');
});

app.get('/new', (req, res) => {
    res.render('new/new.ejs');
});

app.get('/messages', async (req, res) => {
    const result = await retrievePosts();
    res.send(result);
})

app.post('/new', async (req, res) => {
    await addToDB(req.body.user, req.body.text);
    res.redirect('/');
});


// ====== LISTENERS ======

app.listen(port, () => {
    console.log('Listening on port ' + port);
})


// ====== FUNCTIONS ======

async function addToDB (user, message) {

    mongoose.connect(mongoConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'message_board',
      });

    // Schema
    const postSchema = new mongoose.Schema({
        user: String,
        message: String,
        date: Date
    }, {collection: 'posts'});
    const Post = mongoose.model('Post', postSchema);

    // New post
    const post = new Post({
        user,
        message,
        date: new Date()
    });
    console.log(post);
    await post.save();
}

async function retrievePosts () {
    
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
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