const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {type: String, default: "anonymous"},
  postBody: {type: String, required: true}
});

module.exports = mongoose.model("Post", postSchema);
