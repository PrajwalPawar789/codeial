const User = require("../models/Users");

module.exports.profile = function (req, res) {
  // console.log(req.cookies.user_id);
  if(req.cookies.user_id){
    User.findById(req.cookies.user_id)
    .then((user) => {
      return res.render('profile', {
        title: "User Profile",
        user: user
      })
    })
    .catch((err) => {
      console.log("error in user finding by using cookies user_id");
    });
  }
  else{
    return res.redirect('/users/signin'); 
  }

};

module.exports.signin = function (req, res) {
  return res.render("signin");
};

module.exports.signUp = function (req, res) {
  return res.render("signUp");
};

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

module.exports.createSession = function (req, res) {
  //find the user
  User.findOne({ email: req.body.email })
    //handle found user
    .then((user) => {
      //handle user not found
      if (!user) {
        return res.redirect("back");
      } else {
        //handle password which don't match
        if (user.password != req.body.password) {
          return res.redirect("back");
        }
        //handle session creation
        res.cookie("user_id", user.id);
        console.log("session created");
        return res.redirect("/users/profile");
      }
    })
    .catch((error) => {
      console.error(error, "Error creating userSession");
    });
};