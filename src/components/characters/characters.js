import React from "react";
import "./characters.css";

const characters = props => (
    <div className="card" onClick={() => props.clicked(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default characters;