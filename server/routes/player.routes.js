const PlayerController = require('../controllers/player.controller')    // update filename & var name!!!

module.exports = function(app){
    // app.get('/api', PlayerController.index)
    app.get('/api/players', PlayerController.findAllPlayers)
    app.post('/api/players', PlayerController.createPlayers)
    app.delete('/api/players/:id', PlayerController.deletePlayer)
    app.get('/api/players/:id', PlayerController.findOnePlayer)
    app.put('/api/players/:id', PlayerController.updatePlayer)
}