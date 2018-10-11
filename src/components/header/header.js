import React, {Component} from "react";
import "./header.css";

class Header extends Component {
    render () {
        return (
            <div className="header">
            <h1>Lord of the Rings Clicky Game</h1>
            <p>Click on all the images, but don't click the same one twice...</p>
            </div>
        )
    }
}

export default Header;