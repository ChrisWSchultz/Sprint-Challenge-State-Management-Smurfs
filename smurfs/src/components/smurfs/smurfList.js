import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurfs} from "../../actions/smurfsActions";

import SmurfDetail from './smurfDetail';

const SmurfList = (props) => {
    let getSmurfs = props.getSmurfs;
    let update = props.update;

    useEffect(() => {
        getSmurfs();
    },[]);

    useEffect(() => {
        getSmurfs();
    }, [update]);

    return(
        <div>
            Smurf List:
            {props.smurfs.map((smurf) => {
                return(
                    <SmurfDetail smurf={smurf} key={smurf.id}/>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        update: state.update,
    }
};

const mapDispatchToProps = {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);
