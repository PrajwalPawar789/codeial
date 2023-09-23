module.exports.profile = function (req, res) {
  res.end("<h1> from profile</h1>");
};

module.exports.signin = function (req, res) {
  return res.render("signin");
};

module.exports.signUp = function (req, res) {
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

module.exports.posts = function (req, res) {
  res.end("<h1>Users Posts</h1>");
};