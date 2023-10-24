const Post = require('../models/post');


module.exports.home = function(req, res){
    // console.log(req.cookies);

    // Post.find({}, function(err, posts) {
    //     return res.render('home', {
    //         title: "Codial | Home",
    //         posts: posts
    //     })
    // })

    Post.find({}).populate('user').exec()
    .then((posts) => {
        return res.render('home', {
            title: "Codial | Home",
            posts: posts
        })
    })
    .catch((error) => {
        console.log("Error in finding posts", error);
    })
    
};