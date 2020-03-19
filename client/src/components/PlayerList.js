import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [updated])

    const deletePlayer = (e) => {
        let answer = window.confirm(`Are you sure you want to remove ${e.target.name} ?`)
        if(answer === false){
            return
        }
        axios.delete('http://localhost:8000/api/players/' + e.target.id)
            .then(res => {
                setUpdated(!updated)
            })
            .then(err => console.log(err))
    }

    return(
        <table className="table table-striped mt-3">
            <thead className="thead-dark">
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => (
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td><button onClick={deletePlayer} id={player._id} name={player.name} className="btn btn-sm btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default PlayerList