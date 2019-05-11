import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends Component{

    constructor(props) {
        super(props);

        let authToken = localStorage.getItem("JWT");
        if (authToken === null) {
            // This means that there ISN'T JWT and no user is logged in.
            axios.defaults.headers.common.Authorization = null;
        } else {
            // This means that there IS a JWT so someone must be logged in.
            axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        }

        alert("Inicio!");
        axios.get("http://localhost:8080/admins", {} ).then(function(response) {
            alert("Datos Obtenidos!");

        }).catch(function(error) {
            alert("Datos NO Obtenidos :(");
        });

    }

    render(){
        return(
            <div>
                Home
            </div>
        );
    }
}

export default Home;