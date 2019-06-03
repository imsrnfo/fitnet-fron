import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../../../../store';
import {httpPost} from "../../../../util/HttpRequest";

class FormularioArticulos extends Component{

    constructor(){
        super();
        this.btnCancelar = this.btnCancelar.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

        this.state = {

            username:'',
            password: '',
            email:'',
            imagen:'',

            usernameInvalidoMensaje:'',
            passwordInvalidoMensaje:'',
            emailInvalidoMensaje:'',
            imagenInvalidoMensaje:'',

            formSubmited:false
        };

    }

    formSubmit(event){
        event.preventDefault();
        this.setState({formSubmited : true});
        this.setState({codigoInvalidoMensaje : 'Campo invalido'});
        if (
            this.state.codigoInvalidoMensaje.lenght==0 &&
            this.state.nombreInvalidoMensaje.lenght==0 &&
            this.state.precioCostoInvalidoMensaje.lenght==0 &&
            this.state.precioVentaInvalidoMensaje.lenght==0 &&
            this.state.stockActualInvalidoMensaje.lenght==0
        ){
            let { history } = this.props;
            httpPost('/usuarios/crear',this.state).then(
                function(response) {
                    history.push(`/dashboard/usuarios/lista`);
                }).catch(function(error) {
                alert(error);
            });
        }
    }

    btnCancelar(event){
        event.preventDefault();
        this.props.history.push(`/dashboard/usuarios/lista`);
    }

    cargarImagen(event){
        let componente = this;
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(event)=>{
            console.warn("imagen: " , event.target.result);
            componente.setState({imagen : event.target.result});
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card closeable-card">
                            <div className="card-header d-flex flex-row  align-items-center">
                                <div className="w-100"> Titulo </div>
                                <div> <i className="fas fa-times cursor-pointer p-1" onclick="window.ocultar(this);"></i> </div>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <form onSubmit={this.formSubmit}>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label for="inputUsername">Username</label>
                                                        <input className="form-control" id="inputUsername" value={this.state.username} onChange={event=>this.setState({username:event.target.value})}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputPassword">Password</label>
                                                        <input className="form-control" id="inputPassword" value={this.state.password} onChange={event=>this.setState({password:event.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label for="inputEmail">Email</label>
                                                        <input className="form-control" id="inputEmail" value={this.state.email} onChange={event=>this.setState({email:event.target.value})}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputImagen">Imagen</label>
                                                        <input className="form-control" id="inputImagen" type="file" name="file" onChange={(event)=>this.cargarImagen(event)}/>
                                                    </div>
                                                </div>

                                                <div class="mt-3">
                                                    <button type="submit" className="btn btn-primary float-right ml-3" >Aceptar</button>
                                                    <button className="btn btn-secondary float-right" onClick={this.btnCancelar} >Cancelar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioArticulos;