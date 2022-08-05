const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

// Starting the application
var app = express();

const dbString = 'mongodb+srv://kazeaze85:04191961Jtt@solar-remake.7o9irwn.mongodb.net/?retryWrites=true&w=majority'
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Creating the connection to the DB
const connection = mongoose.createConnection(dbString, dbOptions);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const sessionStore = new MongoStore({
    mongooseConnection: connection,
    collection: 'sessions'
});

app.use(session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))