import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameStatusList = (props) => {
    const [players, setPlayers] = useState([])
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [updated])

    const updateStatus = (player, value) => {
        var statusArr = player.games
        let i = props.id - 1
        statusArr[i] = value

        axios.put('http://localhost:8000/api/players/' + player._id, {
            ...player,
            games: statusArr
        })
            .then(res => {
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
    }

    return(
        <table className="table table-striped mt-3">
            <tbody className="thead-dark">
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>
                            {/* ["undecided", "playing", "undecided"] */}
                            {player.games.map((status, i) => (
                                (i+1 == props.id) && (
                                    <div key={i}>
                                        {status === "playing"
                                        ? <button className="btn btn-sm btn-success mr-2">Playing</button> 
                                        : <button onClick={() => updateStatus(player, "playing")} className="btn btn-sm btn-secondary mr-2">Playing</button>}
                                        {status === "notplaying" 
                                        ? <button className="btn btn-sm btn-danger mr-2">Not Playing</button> 
                                        : <button onClick={() => updateStatus(player, "notplaying")} className="btn btn-sm btn-secondary mr-2">Not Playing</button>}
                                        {status === "undecided"
                                        ? <button className="btn btn-sm btn-warning mr-2">Undecided</button> 
                                        : <button onClick={() => updateStatus(player, "undecided")} className="btn btn-sm btn-secondary mr-2">Undecided</button>}
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