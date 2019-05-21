import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/login.css'
import Imagen from './img/gym-icon.png';

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
            history.push(`/dashboard`);
        }).catch(function(error) {
            console.log(error);
            alert("Error de Autenticacion");
        });


    }

    render(){
        return(
            <div className="center-div pb-5">
                <div className="text-center row">
                    <div className="col-md-8 mx-auto">
                        <div className="mb-3">
                            <img alt="image" className="imagen m-b-md" src={Imagen}/>
                        </div>
                        <div className="mb-3 opacity-7">
                            <h3>Bienvenido a FIT-NET</h3>
                            <p>
                                Diseñada especificamente para administrar gimnasios en todo el país.
                                <br/>
                                Inicia sesion o solicita una cuenta.
                            </p>

                        </div>
                        <input className="form-control mb-3" ref="username" placeholder="username = admin" />
                        <input className="form-control mb-3" ref="password" placeholder="password = password" />
                        <button onClick={this.botonClick} className="w-100 btn btn-primary mx-auto mb-2">Login</button>
                        <a href="#"><small>Olvidaste tu Contraseña?</small></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;