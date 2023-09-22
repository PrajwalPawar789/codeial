module.exports.profile = function(req, res){
    res.end('<h1> from profile</h1>');
}

module.exports.signin = function (req, res) {
    return res.render('signin');
};

module.exports.signUp = function (req, res) {
    return res.render('signUp');
};

module.exports.create = function(req, res){
    console.log(req.body);
    if( req.body.password != req.body.confirm_password ) {
        return res.redirect('back');
}

module.exports.posts = function(req, res ){
    res.end('<h1>Users Posts</h1>');
}