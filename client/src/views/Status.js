import React, { useState } from 'react';
import { Link } from '@reach/router'

export default (props) => {
    const [id, setId] = useState(1)
    
    const onClickHandler = (e) => {
        setId(e.target.id)
    }

    return(
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title">Player Status - Game {id}</h2>
                <h4 className="text-center">
                    <Link to='/status/game/1' onClick={onClickHandler} id="1">Game 1</Link> |
                    <Link to='/status/game/2' onClick={onClickHandler} id="2">Game 2</Link> |
                    <Link to='/status/game/3' onClick={onClickHandler} id="3">Game 3</Link> 
                </h4>
                {props.children}  
            </div>  
        </div>
    )
}