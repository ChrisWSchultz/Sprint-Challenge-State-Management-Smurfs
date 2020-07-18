import React from 'react';
import {connect} from "react-redux";

import {postSmurf} from "../../actions/smurfsActions";

const SmurfForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        props.postSmurf({
            'name': event.target.name.value,
            'age': event.target.age.value,
            'height': event.target.height.value
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder="Name" id="name" />
                </label>
                <label>
                    <input placeholder="Age" id="age" />
                </label>
                <label>
                    <input placeholder="Height" id="height" />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = {
    postSmurf,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);