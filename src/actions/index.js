import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
    .then((res) => {
        //console.log(res)
        dispatch(success(res.data))
    })
    .catch(err => {
        dispatch(error(err))
    })
}

const loading = () => {
    return({type:LOADING})
}
const success = (data) => {
    return{type: SUCCESS, payload: data};
}
export const addSmurf = (character) => {
    return({type: ADD_SMURF, payload:character})
}
export const error = (message) => {
    return({type:ERROR, payload:message})
}



//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.