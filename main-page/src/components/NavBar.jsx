import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"
export const NavBar = () => {
    return (
    <div class = "nav_bar_css">
        <div class = "logo_placement">
            logo
        </div>
        <div class = "nav_list">
            <ul>
                <li>
                    <Link to = "/">home</Link>
                </li>
                <li>
                    <Link to = "about">about</Link>
                </li>
                <li>
                    <Link to = "login">login</Link>
                </li>
                <li>
                    <Link to = "register">register</Link>
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
