const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const cookieParser = require('cookie-parser');
// const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const db = require('./config/mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded());
app.use(cookieParser());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//MongoStore used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/codeial_development' })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

//use express router 
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err){
        console.error(`Couldn't listen on ${port}`);
    }
    console.log(`Listening on ${port}`);
});

