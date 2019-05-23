import {createStore} from 'redux';

const reducer = (state,action) =>{

    if (action.type === "ADD_TO_LIST"){
        return{
            ...state,
            elementos: state.elementos.concat(action.elemento)
        }
    }

    return state;
}

export default createStore(reducer,{elementos: []});