import React from 'react';
import '../../App.css';


const Alternate = (props) => {
    return (
        <div className="alternate__row">
            <h1 className="heading heading--alternate">{props.name}</h1>
        </div>
    )
};

export default Alternate;