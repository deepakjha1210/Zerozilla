const mongoose = require('mongoose')
const url =
  'mongodb+srv://deepakjhadj104:8XANVh7jvuEOon4l@cluster0.5g2lgws.mongodb.net/Zerozilla'

exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database')
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...')
      console.error(error)
      process.exit(1)
    })
}
