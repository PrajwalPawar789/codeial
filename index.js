const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

const db = require('./config/mongoose');
app.use(express.urlencoded());
//use express router 
app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err){
        console.error(`Couldn't listen on ${port}`);
    }
    console.log(`Listening on ${port}`);
});

