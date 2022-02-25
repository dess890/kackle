var express = require('express');
const session = require('express-session')
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/user');
// const twitterAuth = require('./routes/auth/twitter')
const chatRouter = require('./routes/api/chat')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: 'secret', // used to sign the cookie
        resave: false, // update session even w/ no changes
        saveUninitialized: true, // always create a session
        cookie: {
            secure: false, // true: only accept https req's
            maxAge: 2592000000, // time in milliseconds
            // 2,592,000,000 ms = 30 days
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/', twitterAuth);
app.use('/users', usersRouter);
app.use('/chat', chatRouter)

module.exports = app;
