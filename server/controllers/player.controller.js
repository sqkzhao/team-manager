const { Player } = require('../models/player.model')    // update filename!!!

// module.exports.index = (req, res) => {
//     res.json({ message: "hello"})
// }

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err =>  res.json(err))
}

module.exports.createPlayers = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err =>  res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.findOneAndDelete({ _id: req.params.id })
        .then(player => res.json(player))
        .catch(err =>  res.json(err))
}