import axios from "axios";
export const LOADING = "LOADING";
export const GET_SMURFS = "GET_SMURFS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";


//DATA SOURCE
const URL = "http://localhost:3333";

// GRABBING SMURF DATA FROM API
export const getSmurfs = () => dispatch => {
dispatch({ type: LOADING });
axios
  .get(`${URL}/smurfs`)
  .then(response => {
    console.log(response.data);
    dispatch({ type: GET_SMURFS, payload: response.data });
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorMessage });
  });
};

//ADDING A NEW SMURF TO DATABASE AND RETURNING DATA
export const addSmurf = newSmurf => dispatch => {
dispatch({ type: LOADING });
axios
  .post(`${URL}/smurfs`, newSmurf)
  .then(response => {
    console.log(response.data);
    dispatch({ type: ADD_SMURF, payload: response.data });
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorMessage });
  });
};

//UPDATING SMURF
export const updateSmurf = updatedSmurf => dispatch => {
  dispatch({ type: LOADING });
  axios
    .put(`${URL}/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(response => {
      console.log(response.data);
      dispatch({ type: UPDATE_SMURF, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.errorMessage });
    });
  };

//DELETE SMURF
export const deleteSmurf = id => dispatch => {
dispatch({ type: LOADING });
axios
  .delete(`${URL}/smurfs/${id}`)
  .then(response => {
    console.log(response.data);
    dispatch({ type: DELETE_SMURF, payload: response.data });
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorMessage });
  });
};


