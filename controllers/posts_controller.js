const Post = require("../models/post");

module.exports.create = function (req, res) {
  console.log(req.body);
  console.log(req.user);
  Post.create({
    content: req.body.content,
    user: req.user._id,
  })
    .then(function (post) {
      res.redirect("back");
    })
    .catch((error) => {
      console.log(error, "Error in creating post");
      return;
    });
};
