/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from "axios";
const SERVER = "http://localhost:3333/smurfs";
const SERVERID = `http://localhost:3333/smurfs${id}`
const SERVERUP = `http://localhost:3333/smurfs${updateSmurfs.id}`
// Get Smurf here
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURFS" });
    axios
      .get(SERVER)
      .then(response => {
        dispatch({ type: "SMURFS_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };

  // Add Smurf here
  export const addSmurfs = (newsmurf) => {
    return dispatch => {
      dispatch({ type: "ADDING_SMURF" })
      axios
        .post(SERVER, smurf)
        .then(response => {
          dispatch({
            type: "SMURF_ADDED",
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          })
        })
    }
  }

  // Update Smurf here
  export const updateSmurfs = (updateSmurf) => {
    return dispatch => {
      dispatch({ type: UPDATING_SMURF })
      axios
        .put(`SERVERUP`, smurf)
        .then(response => {
          dispatch({
            type: SUCCESS,
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          })
        })
    }
  }
}

// Delete Smurf here
export const deleteSmurfs = id => {
  return dispatch => {
    dispatch({type: LOADING})
    axios
        .delete(`SERVERID`)
        .then(response => {
          dispatch({
            type: SUCCESS,
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          })
        })
  }
}




