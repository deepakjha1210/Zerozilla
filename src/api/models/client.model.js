const mongoose = require('mongoose')
const ClientSchema = new mongoose.Schema({
  clientID: {
    type: Number,
    unique: true,
    required: true,
    min: 1,
  },
  AgencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agency',
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  totalBill: {
    type: Number,
  },
})

const Agency = mongoose.model('Client', ClientSchema)
module.exports = Agency
