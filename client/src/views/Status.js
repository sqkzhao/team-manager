import React, { useState } from 'react';
import { Link } from '@reach/router'

export default (props) => {
    const [id, setId] = useState(1)
    
    const onClickHandler = (e) => {
        setId(e.target.id)
    }

    return(
        <div>
            <h1>Player Status - Game {id}</h1>
            <nav>
                <Link to='/status/game/1' onClick={onClickHandler} id="1">Game 1</Link> |
                <Link to='/status/game/2' onClick={onClickHandler} id="2">Game 2</Link> |
                <Link to='/status/game/3' onClick={onClickHandler} id="3">Game 3</Link> 
            </nav>
            {props.children}    
        </div>
    )
}