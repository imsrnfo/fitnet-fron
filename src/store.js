import {createStore} from 'redux';

const reducer = (state,action) =>{

    if (action.type === "ADD_TO_LIST"){
        return{
            ...state,
            elementos: state.elementos.concat(action.elemento)
        }
    }

    if (action.type === "SET_ARTICULOS"){
        return{
            ...state,
            articulos: action.articulos
        }
    }

    if (action.type === "SET_USUARIOS"){
            return{
                ...state,
                usuarios: action.usuarios
            }
        }

    return state;
}

export default createStore(reducer,{
    elementos: [],
    articulos: [],
    usuarios: []
});