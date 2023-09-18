const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err){
        console.error(`Couldn't listen on ${port}`);
    }
    console.log(`Listening on ${port}`);
});

