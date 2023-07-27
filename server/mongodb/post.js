const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  prompt: { type: String, required: true },
  image: { type: String, required: true },
  model: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const PostSchema = mongoose.model("Post", Post);

module.exports = PostSchema;
