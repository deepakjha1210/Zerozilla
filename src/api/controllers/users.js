const Users = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  create: async function (req, res, next) {
    try {
      const { name, email, password } = req.body
      await Users.create({
        name: name,
        email: email,
        password: password,
      })
      res.send({
        status: 'ok',
        message: `client register successfully: ${name}`,
      })
    } catch (err) {
      console.log(err)
      res.send({
        status: 'error ocuured',
        message: `client register failed:`,
      })
    }
  },

  authenticate: function (req, res, next) {
    Users.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err) {
        next(err)
      } else {
        if (
          userInfo != null &&
          bcrypt.compareSync(req.body.password, userInfo.password)
        ) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get('secretKey'),
            { expiresIn: '1h' }
          )

          res.json({
            status: 'success',
            message: 'user found!!!',
            data: { user: userInfo, token: token },
          })
        } else {
          res.json({
            status: 'error',
            message: 'Invalid email/password!!!',
            data: null,
          })
        }
      }
    })
  },
}
