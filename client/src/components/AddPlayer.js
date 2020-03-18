import React, { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const AddPlayer = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [errors, setErrors] = useState([])
    const [isValid, setIsValid] = useState(false)

    const addPlayer = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/players', {
            name,
            position
        })
            .then(res => {
                navigate("/players/list")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for(const key of Object.keys(errorResponse)){
                    errorArr.push({
                        k: key,
                        val: errorResponse[key].message
                    })
                }
                setErrors(errorArr)
            })
    }

    return(
        <div>
            <h1>Add Player</h1>
            <form onSubmit={addPlayer}>
                <p>
                    <label>Player Name:</label>
                    <input type="text" onChange={(e) => {
                        if(e.target.value.length < 2){
                            setIsValid(false)
                        } else{
                            setIsValid(true)
                        }
                        setName(e.target.value)
                    }}/>
                    {errors.map((error, i) => {
                        if(error.k === "name"){
                            return <p key={i}>{error.val}</p>
                        }
                    })}
                </p>
                <p>
                    <label>Preferred Position:</label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                </p>
                {isValid ? <input type="submit" value="Add"/> : <input type="button" value="Add" disabled/>}
            </form>
        </div>
    )
}
export default AddPlayer