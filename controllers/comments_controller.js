const Comment = require('../models/comments');
const Post = require('../models/post');

module.exports.create = function(req, res) {
    Post.findById(req.body.post)
    .then( function(post) {
        if(post) {
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id,
            }).then(function(comment){
                post.comments.push(comment);
                post.save();
                res.redirect('/');
            }).catch(err => {
                //handle error
                console.log("Error creating comment",err);
            })
        }})
        .catch(err => {
        console.log("Error in finding post for comment",err);
        })
};