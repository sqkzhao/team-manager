const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters."]
    },
    position: {
        type: String
    },
    games: [String] // [game1status, game2status, game3status] => ["undecided", "playing", "undecided"]
}, { timestamps: true })

module.exports.Player = mongoose.model("Player", PlayerSchema)