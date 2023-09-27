const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users_controller');

router.get('/profile', userController.profile);
router.get('/posts', userController.posts);
router.get('/signin', userController.signin);
router.get('/signup', userController.signUp);
router.post('/create', userController.create);

// use passport as a middleware to authenticate

router.post('/create-session', passport.authenticate(
    'local',
    {
        failureRedirect: '/users/signin',
    }
) ,userController.createSession);

module.exports = router;