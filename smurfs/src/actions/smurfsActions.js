import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_ERROR = "GET_SMURFS_ERROR";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

const smurfsURL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });
    axios.get(smurfsURL)
        .then((response) => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data })
        })
        .catch((error) => {
            dispatch({ type: GET_SMURFS_ERROR, payload: error })
        });
};

export const postSmurf = (smurfInfo) => dispatch => {
    dispatch({ type: POST_SMURF_START });
    axios.post(smurfsURL, smurfInfo)
        .then(() => {
            dispatch({ type: POST_SMURF_SUCCESS });
        })
        .catch((error) => {
            dispatch({ type: POST_SMURF_ERROR, payload: error })
        });
};
