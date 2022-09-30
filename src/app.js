const express = require('express')
const app = express()
const port = 3000
const postStatic = require('./post-static')
const connection = require('./configs/connect-db')
const bodyParser = require('body-parser')
const cors = require('cors');

const { getAllPost, addPost } = require('./controllers/PostController')


connection()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
  origin: '*'
}));

app.get('/', (request, response) => {
    response.send('hello from express')
})

app.get('/post-static', (request, response) => {
  response.json({
    status: 200,
    success: true,
    result: postStatic
  })
})

app.get('/post', async (request, response) => {
  response.json({
    status: 200,
    success: true,
    result: await getAllPost()
  })
})

app.post('/post/add-post', async (request, response) => {
  if (!Object.keys(request.body).length) {
      response.status(400).json({
      message: 'Request body cannot be empty'
    })
  }

  const { post_title, post_description } = (request.body)
  
  const createPost = await addPost({
    post_title,
    post_description,
    post_date: new Date()
  })

  if (!createPost.success) {
    response.json({
      success: false,
      errorMessage: createPost.errorMessage
    })
  }

  response.json({
    success: true,
  })

})

app.listen(port, () => {
  console.log(`Listening in port ${port}`)
})