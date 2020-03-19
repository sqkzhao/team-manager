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
                // const errorResponse = err.response.data.errors
                const {errors} = err.response.data
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push({
                        k: key,
                        val: errors[key].message
                    })
                }
                setErrors(errorArr)
            })
    }

    return(
        <div className="mt-3">
            <h3>Add Player</h3>
            <form onSubmit={addPlayer} className="mt-3">
                <div className="form-group row mx-3">
                    <label className="col-sm-2 col-form-label">Player Name:</label>
                    <input type="text" onChange={(e) => {
                        if(e.target.value.length < 2){
                            setIsValid(false)
                        } else{
                            setIsValid(true)
                        }
                        setName(e.target.value)
                    }} className="col-sm-9 form-control"/>
                    {errors.map((error, i) => {
                        if(error.k === "name"){
                            return <p key={i} className="text-danger ml-3">{error.val}</p>
                        }
                    })}
                </div>
                <div className="form-group row mx-3">
                    <label className="col-sm-2 col-form-label">Preferred Position:</label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)} className="col-sm-9 form-control"/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary mr-5 float-right mt-3"/>
                {/* {isValid ? <input type="submit" value="Add" className="btn btn-primary mr-5 float-right mt-3"/> : <input type="button" value="Add" disabled className="btn btn-primary my-2 mr-5 float-right"/>} */}
            </form>
        </div>
    )
}
export default AddPlayer