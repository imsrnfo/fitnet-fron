import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends Component{

    constructor(props) {
        super(props);

        this.botonClick = this.botonClick.bind(this);
    }

    botonClick(event){
        var session_url = 'http://localhost:8081/oauth/token';
        var uname = 'USER_CLIENT_APP';
        var pass = 'password';

        var bodyFormData = new FormData();
        bodyFormData.set('username', this.refs.username.value);
        bodyFormData.set('password', this.refs.password.value);
        bodyFormData.set('grant_type', 'password');

        //fuente: https://stackoverflow.com/questions/54243931/how-to-redirect-to-another-page-using-history-on-react-js
        let { history } = this.props;

        axios.post(session_url, bodyFormData, {
            auth: {
                username: uname,
                password: pass
            }
        }).then(function(response) {
            console.log(response.data.access_token);
            alert(response.data.access_token);

            localStorage.setItem('JWT', response.data.access_token);
            history.push(`/home`);
        }).catch(function(error) {
            console.log(error);
            alert("Error de Autenticacion");
        });


    }

    render(){
        return(
            <div>
                <input ref="username" placeholder="username = admin" />
                <input ref="password" placeholder="password = password" />
                <button onClick={this.botonClick}>Boton</button>
            </div>
        );
    }
}

export default Login;