import React from 'react'
import { Link } from '@reach/router'

export default (props) => {
    return(
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title">
                    <Link to="/players/list">List</Link>|
                    <Link to="/players/addplayer">Add Player</Link>
                </h2>

                {/* The child route component is passed to the parent as props.children */}
                {props.children}   
            </div> 
        </div>
    )
}