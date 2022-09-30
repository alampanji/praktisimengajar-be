const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Post = new Schema({
  post_title: String,
  post_date: Date,
  post_description: String
})

const PostModel = mongoose.model("PostModel", Post, "post")

module.exports = PostModel