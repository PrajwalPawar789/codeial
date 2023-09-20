const express = require('express');
const app = express();
const port = 8000;

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

