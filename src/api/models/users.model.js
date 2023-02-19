const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds)
  next()
})

module.exports = mongoose.model('Users', UserSchema)
