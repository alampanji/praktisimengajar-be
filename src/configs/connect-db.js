const mongoose = require('mongoose')

const connection = () => {
  mongoose.connect('mongodb://localhost:27017/blog_db', {
    useNewUrlParser: true
  })

  mongoose.connection.on("error", (err) => {
    console.log('Error connection to DB', err)
  })

  mongoose.connection.on("connected", (err, res) => {
    console.log('Mongoose successfuly connected')
  })
}

module.exports = connection