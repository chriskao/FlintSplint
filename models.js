
var Mongoose = require('mongoose');


var PostSchema = new Mongoose.Schema({
  // fields are defined here
  "email": String,
  "description": String,
  "file": String
});

exports.Post = Mongoose.model('Post', PostSchema);


