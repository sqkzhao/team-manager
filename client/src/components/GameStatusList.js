import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameStatusList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <table>
            <tbody>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
                {players.map((player, i) => (
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td>
                            <button>Playing</button>
                            <button>Not Playing</button>
                            <button>Undecided</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default GameStatusList