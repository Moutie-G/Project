import React,{useState} from 'react';
import {NavLink} from 'react-router-dom' ;
import { NavLink } from 'react-router-dom';

 function main() {
    return (
        <div>
             <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-nav">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to ="/Acceul" class="nav-link" >ACCUEIL</Link>
                </li>
                <li class="nav-item">
                    <Link to ="SUITES" class="nav-link" >SUITES</Link>
                </li>
                <li class="nav-item">
                    <Link to ="RESTAURANTS" class="nav-link" >RESTAURANTS</Link>
                </li>
                <li class="nav-item logo">
                    <Link to ="ACCEUIL" class="nav-link" ><img src="images/hover-box-galerie.png" /></Link>
                </li>
                <li class="nav-item">
                    <Link to ="SPAS" class="nav-link" >SPAS</Link>
                </li>
                <li class="nav-item">
                    <Link to ="RESERVATIONS" class="nav-link" >RESERVATIONS</Link>
                </li>
                <li class="nav-item">
                    <Link to ="CONTACT" class="nav-link" >CONTACT</Link>
                </li>
            </ul>
            </div>
            </nav>
    
        </div>
    )
}
export default main 
