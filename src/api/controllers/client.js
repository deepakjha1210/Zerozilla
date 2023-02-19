const Clients = require('../models/client.model')

module.exports = {
  updateclientByID: function (req, res, next) {
    Clients.findOneAndUpdate(
      req.body.clientID,
      {
        $set: {
          Name: req.body.Name,
          Email: req.body.Email,
          PhoneNumber: req.body.PhoneNumber,
          totalBill: req.body.totalBill,
        },
      },
      function (err, result) {
        if (err) next(err)
        else {
          res.json({
            status: 'success',
            message: 'client updated successfully!!!',
            data: null,
          })
        }
      }
    )
  },

  createclient: async function (req, res, next) {
    try {
      await Clients.create({
        clientID: req.body.clientID,
        Name: req.body.Name,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        totalBill: req.body.totalBill,
        AgencyId: req.body.AgencyId,
      })
      res.send({
        status: 'ok',
        message: `client create successfully`,
      })
    } catch (err) {
      console.log(err)
      res.send({
        status: 'error ocuured',
        message: `Failed to create client`,
      })
    }
  },
}
