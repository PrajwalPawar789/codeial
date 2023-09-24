const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller');

router.get('/profile', userController.profile);
router.get('/posts', userController.posts);
router.get('/signin', userController.signin);
router.get('/signup', userController.signUp);
router.post('/create', userController.create);
router.post('/create-session', userController.createSession);

module.exports = router;