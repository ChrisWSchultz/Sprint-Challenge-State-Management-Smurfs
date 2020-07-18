import React from 'react';

const SmurfDetail = (props) => {
    return(
        <div className="smurf-detail">
            <p>Name: {props.smurf.name}, Age: {props.smurf.age}, Height: {props.smurf.height} </p>
        </div>
    );
};

export default SmurfDetail;