const express = require('express')
require('./config/db-config').connect()
require('./api/models/users.model')
require('./api/models/client.model')
const users = require('./routes/users')
const agency = require('./routes/agency')
const clients = require('./routes/client')
var jwt = require('jsonwebtoken')

const app = express()
app.set('secretKey', '@secret!') // jwt secret token

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to sample application.' })
})

app.use('/users', users)

app.use('/agency', validateUser, agency)
app.use('/clients', validateUser, clients)

function validateUser(req, res, next) {
  jwt.verify(
    req.headers['authorization'],
    req.app.get('secretKey'),
    function (err, decoded) {
      if (err) {
        res.json({ status: 'error', message: err.message, data: null })
      } else {
        req.body.userId = decoded.id
        next()
      }
    }
  )
}

app.use(function (err, req, res, next) {
  console.log(err)

  if (err.status === 404) res.status(404).json({ message: 'Not found' })
  else res.status(500).json({ message: 'Something looks wrong :( !!!' })
})

// set port, listen for requests
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
