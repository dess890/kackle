var express = require('express');
const session = require('express-session')
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
const db = require('./models')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const twitterAuth = require('./routes/auth/twitter')
const facebookAuth = require('./routes/auth/facebook')
const localAuth = require('./routes/auth/local')
const chatRouter = require('./routes/api/chat')
const authIndex = require('./routes/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const SequelizeStore =
    require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize })

app.use(
    session({
        secret: 'secret', // used to sign the cookie
        resave: false, // update session even w/ no changes
        saveUninitialized: true, // always create a session
        store: store
    })
);
store.sync()
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/auth', authIndex)
app.use('/auth/local', localAuth);
app.use('/auth/twitter', twitterAuth);
app.use('/auth/facebook', facebookAuth);
app.use('/users/api', usersRouter);
app.use('/chat/api', chatRouter)

module.exports = app;
