import React from 'react';
import Knight from "../assets/Knight.png";
import Mage from "../assets/Mage.png";
import Thief from "../assets/Thief.png";

const Classes = ({ Class, Src }) => {
    return (
        <figure className="player_class">
            <h2 className="class_header">{Class}</h2>
            <img src={Src} alt="Placeholder" className="showcase_image"/>
        </figure>
    );
}

export default Classes;