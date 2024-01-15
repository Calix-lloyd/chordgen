import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"
import main_logo from "./chordgen_logo.png"
export const NavBar = () => {
    return (
    <div class = "nav_bar_css">
        <div class = "logo_placement">
            <Link to= "/"><img src= {main_logo} alt="logo" height= "20px"/></Link>
        </div>
        <div class = 'nav'>
            <ul class = "nav_list">
                <li>
                    <Link to = "/">HOME</Link>
                </li>
                <li>
                    <Link to = "about">ABOUT</Link>
                </li>
                <li>
                    <Link to = "login">LOGIN</Link>
                </li>
                <li>
                    <Link to = "register">REGISTER</Link>
                </li>
            </ul>
        </div>
    </div>
    
    );
}

//i thought u asked launch 
//lunch im gonna get somthing very
//very light
//sick ane
// ok 
