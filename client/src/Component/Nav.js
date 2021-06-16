import React from 'react' ;
import {NavLink} from 'react-router-dom';

function navBar() {
    return (
    <>
        <nav className="navBar">
            <div className="container">
                <NavLink exact to ="/" className="nav-Logo">
                  Hotel
                </NavLink>
                <ul>
                    <li>
                    <NavLink exact to ="/home" className="nav-Links">
                  Home
                </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Rooms" className="nav-Links">
                  Rooms
                </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/Restaurant" className="nav-Links">
                  Restaurant
                </NavLink>
                </li>
                  <li>
                    <NavLink exact to ="/Réservation" className="nav-Links">
                  Réservation
                </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/About" className="nav-Links">
                  About 
                </NavLink>
                </li>
               
                </ul>
            </div>
        </nav>    
    </>
    )
}

export default navBar
