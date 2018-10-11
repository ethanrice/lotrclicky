import React from "react";
import "./navbar.css";

const Navbar = props => (
    <div className="navbar">
        <li className="score"> Score: {props.score} | High Score: {props.highscore}</li>
    </div>
)
 
export default Navbar;