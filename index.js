const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('./config/passport-local');
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());


//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name:'codial',
    secret: 'blahsmothing',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 *100)
    } 
}));

app.use(passport.initialize());
app.use(passport.session());

//use express router 
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err){
        console.error(`Couldn't listen on ${port}`);
    }
    console.log(`Listening on ${port}`);
});

