const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string', 
        required: true
    },
    name: {
        type: 'string',
        required: true
    }
},{timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;