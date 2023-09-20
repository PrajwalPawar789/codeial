const home = function(req, res){
    res.end('<h1>Home loaded using controller and route');
};

module.exports = {
    home: home
};