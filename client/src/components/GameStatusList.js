import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameStatusList = (props) => {
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState()
    const [gameState, setGameState] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const updateStatus = (playerId, statusType) => {
        axios.get('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                // setPlayer(res.data)
                // setGameState(res.data.games)
                // const gid = props.id - 1
                // gameState.games.gid.statusType = false
                // setPlayer({
                //     ...player,
                //     games: [
                //         ...gameState,
                //         statusType: !
                //     ]
                // })
            })

        // axios.put('http://localhost:8000/api/players/' + id, {
        // })
    }

    return(
        <table className="table table-striped mt-3">
            <tbody className="thead-dark">
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
                {players.map((player, i) => (
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td>
                            {player.games.map((game, index) => (
                                (game.id == props.id) && (
                                    <div key={index}>
                                        {game.playing 
                                        ? <button key={index} className="btn btn-sm btn-success mr-2">Playing</button> 
                                        : <button key={index} className="btn btn-sm btn-secondary mr-2">Playing</button>}
                                        {game.notplaying 
                                        ? <button key={index} className="btn btn-sm btn-danger mr-2">Not Playing</button> 
                                        : <button key={index} className="btn btn-sm btn-secondary mr-2">Not Playing</button>}
                                        {game.undecided 
                                        ? <button key={index} onClick={() => updateStatus(player._id, "undecided")} className="btn btn-sm btn-warning mr-2">Undecided</button> 
                                        : <button key={index} className="btn btn-sm btn-secondary mr-2">Undecided</button>}
                                    </div>
                                )
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default GameStatusList