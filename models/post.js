const mongoose = require('mongoose');
 
const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

const Post = mongoose.model('Post', postSchema);

moduel.exports = Post;