const Post = require('../models/Post')

const getAllPost = async () => {
  const res = await Post.find({})
  return {
    data: res
  }
}

const addPost = async (data) => {
  try{
    const PostModel = new Post(data);
    const newPost = PostModel.save()

    if (!newPost) {
      throw new Error('Can\'t add post data')
    }
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      errorMessage: err
    }
  }
}

module.exports = {
  getAllPost,
  addPost,
}