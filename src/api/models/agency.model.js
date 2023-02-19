const mongoose = require('mongoose')
const Schema = mongoose.Schema
const agencySchema = new Schema({
  AgencyId: {
    type: Number,
    unique: true,
    required: true,
    min: 1,
  },
  Name: {
    type: String,
    required: true,
  },
  Address1: {
    type: String,
    required: true,
  },
  Address2: {
    type: String,
    default: '',
  },
  State: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
})
const Agency = mongoose.model('agency', agencySchema)
module.exports = Agency
