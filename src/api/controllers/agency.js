const Agency = require('../models/agency.model')
const Clients = require('../models/client.model')

module.exports = {
  createagency: async function (req, res, next) {
    try {
      const { AgencyId, Name, Address1, Address2, State, City, PhoneNumber } =
        req.body
      await Agency.create({
        AgencyId: AgencyId,
        Name: Name,
        Address1: Address1,
        Address2: Address2,
        State: State,
        City: City,
        PhoneNumber: PhoneNumber,
      })
      res.send({
        status: 'ok',
        message: `Agency create successfully: ${Name}`,
      })
    } catch (err) {
      console.log(err)
      res.send({
        status: 'error ocuured',
        message: `Failed to create agency`,
      })
    }
  },

  createboth: async function (req, res, next) {
    try {
      const {
        AgencyId,
        Name,
        Address1,
        Address2,
        State,
        City,
        PhoneNumber,
        clients,
      } = req.body
      const result = await Agency.create({
        AgencyId: AgencyId,
        Name: Name,
        Address1: Address1,
        Address2: Address2,
        State: State,
        City: City,
        PhoneNumber: PhoneNumber,
      })

      if (result) {
        clients.forEach((element) => {
          console.log(element)
          element['AgencyId'] = result._id
        })
        Clients.insertMany(clients)
          .then(function () {
            console.log('Client Record Inserted')
          })
          .catch(function (error) {
            console.log(error)
          })
        res.send({
          status: 'ok',
          message: `Agency and client created successfully: ${Name}`,
        })
      }
    } catch (err) {
      console.log(err)
      res.send({
        status: 'error ocuured',
        message: `Failed to create agency`,
      })
    }
  },

  getMaxBill: async function (req, res, next) {
    const result = await Clients.aggregate([
      { $sort: { totalBill: -1 } },
      {
        $lookup: {
          from: 'agencies',
          localField: 'AgencyId',
          foreignField: '_id',
          as: 'agency_data',
        },
      },
    ])
    var finaldata = []
    await result.forEach((element) => {
      let obj = {
        AgencyName: element['agency_data'][0]['Name'],
        ClientName: element['Name'],
        TotalBill: element['totalBill'],
      }
      finaldata.push(obj)
    })
    res.json({
      status: 'ok',
      data: finaldata,
    })
  },
}
