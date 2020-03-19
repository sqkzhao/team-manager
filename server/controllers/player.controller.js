const { Player } = require('../models/player.model')    // update filename!!!

// module.exports.index = (req, res) => {
//     res.json({ message: "hello"})
// }

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err =>  res.json(err))
}

module.exports.findOnePlayer = (req, res) => {
    Player.find({ _id: req.params.id })
        .then(player => res.json(player))
        .catch(err =>  res.json(err))
}

module.exports.createPlayers = (req, res) => {
    Player.create(req.body)
        .then(player => {
            Player.findOneAndUpdate({ _id: player._id }, {
                games: ["undecided", "undecided", "undecided"]
            }, { new: true })
                .then(player => {
                    res.json(player)
                })
        })
        .catch(err =>  res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.findOneAndDelete({ _id: req.params.id }) //deleteOne
        .then(player => res.json(player))
        .catch(err =>  res.json(err))
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(player => res.json(player))
        .catch(err =>  res.json(err))
}