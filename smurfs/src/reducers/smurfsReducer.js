import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR,
    } from '../actions/smurfsActions';

const initialState = {
    smurfs: [],
    fetching: false,
    posting: false,
    update: false,
    error: '',
};

export const SmurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START:
            return {...state, fetching: true};
        case GET_SMURFS_SUCCESS:
            return {...state, fetching: false, smurfs: action.payload, update: false};
        case GET_SMURFS_ERROR:
            return {...state, fetching: false, error: action.payload};

        case POST_SMURF_START:
            return {...state, posting: true};
        case POST_SMURF_SUCCESS:
            return {...state, posting: false, update: true};
        case POST_SMURF_ERROR:
            return {...state, error: action.payload};

        default:
            return state;
    }
};