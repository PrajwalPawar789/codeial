const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users');

passport.use(
    new LocalStrategy( {
        usernameField: 'email',
    }, async(email, password, done) =>{
        try{
            const user = await User.findOne({email: email});

            if(!user) return done(null, false);

            if(user.password !== password) return done(null, false);

            return done(null, user);
        }
        catch(error){
            return done(error, false);
        }
    })
)

passport.serializeUser(function(user, done) {
    return done(null, user.id);
})

passport.deserializeUser(async(id, done) => {
    try{
        const user = await User.findById(id);
        done (null, user);
    }
    catch(error){
        done (error, false);
    };
})

//check if the user is authenticated or not

passport.checkAuthentication = function (req, res, next){
        //if the user is signed in then pass on the request to the next controller
        if(req.isAuthenticated()){
            return next();
        }

        //if the user is not signed in then
        return res.redirect('/users/signin');
        
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated){
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;