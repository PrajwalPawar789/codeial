module.exports.profile = function (req, res) {
  return res.render('profile');
};

module.exports.signin = function (req, res) {

  if(req.isAuthenticated()){
    return res.redirect('./profile');
  }

  return res.render("signin");
};

module.exports.signUp = function (req, res) {

  if(req.isAuthenticated()){
    return res.redirect('./profile');
  }

  return res.render("signUp");
};

const User = require("../models/Users");

module.exports.create = function (req, res) {
  console.log(req.body);
  console.log(req.body.password);
  console.log(req.body.confirm_password);
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email })
    .then(function (user) {
      if (!user) {
        User.create(req.body)
          .then(() => {
            console.log("User created");
            return res.redirect("signin");
          })
          .catch((error) => {
            console.log(error, "Error in creating user");
            return;
          });
      }
    })
    .catch((error) => {
      console.log(error, "Error in creating user");
      return;
    });
};

// sign in and create a session for the user
module.exports.createSession = function(req, res){
  return res.redirect('/');
}

module.exports.posts = function (req, res) {
  res.end("<h1>Users Posts</h1>");
};


module.exports.signout = function (req, res) {
  req.logout(function(err) {
    if (err) {
      // Handle any errors that occurred during the logout process
      return next(err);
    }
    // Redirect or perform any other actions after successful logout
    return res.redirect('/');
  });
}