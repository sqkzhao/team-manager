import React from 'react'
import { Link } from '@reach/router'

export default (props) => {
    return(
        <div>
            <h1>
                <Link to="/players/list">List</Link>|
                <Link to="/players/addplayer">Add Player</Link>
            </h1>

            {/* The child route component is passed to the parent as props.children */}
            {props.children}    
        </div>
    )
}