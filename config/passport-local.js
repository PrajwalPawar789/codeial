const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users');

passport.use(new LocalStrategy(
    function(email, password, done) {
         User.findOne({ email: email }, function(err, user){
            if(err){
                console.log('Error in finding user: ' + err);
                return done(err);
            }
            if( !user || user.password != password ){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
        })
    }

));

passport.serializeUser(function(err, user) {
    return done(null, user.id);
})

passport.deserializeUser(function(id, user){
    User.findById(id, function(err, user){
        if(err){ return done(err); }
        return done(null, user);
    })
})

module.exports = passport;