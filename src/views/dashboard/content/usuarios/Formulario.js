import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../../../../store';
import {httpPost} from "../../../../util/HttpRequest";
import TextInput from '../../../../components/TextInput';
import ImageInput from '../../../../components/ImageInput';

class FormularioArticulos extends Component{

    constructor(){
        super();
        this.btnCancelar = this.btnCancelar.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this)

        this.state = {
            objeto : {
                username:{
                     valor: '',
                     valido: false
                 },
                password: {
                      valor: '',
                      valido: false
                  },
                email:{
                      valor: '',
                      valido: false
                  },
                imagen:{
                     valor: '',
                     valido: false
                 }
            },
            formularioValido:false
        };

    }

    formSubmit(event){
        event.preventDefault();
        let { history } = this.props;
        httpPost('/usuarios/crear',this.state).then(
            function(response) {
                history.push(`/dashboard/usuarios/lista`);
            }).catch(function(error) {
            alert(error);
        });
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
            componente.setState({ objeto: { ...this.state.objeto, imagen: event.target.result} });
        }
    }

    onInputChange(campo, valor, valido) {
        let nuevoCampo = {valido: valido, valor: valor};
        this.setState({ objeto: { ...this.state.objeto, [campo]: nuevoCampo}}, function(){
               var formValido = true;
               var estado = this.state;
               Object.keys(estado.objeto).map(function (key) {
                   if (estado.objeto[key].valido!==undefined) formValido = formValido && estado.objeto[key].valido;
               });
               this.setState({formularioValido : formValido});
        });
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
                                                        <TextInput campo="username" onInputChange={this.onInputChange} label="Username" validaciones={{'min-lenght' : 3, 'max-lenght' : 7, 'basicas': ['not-null','email']}}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <TextInput campo="password" onInputChange={this.onInputChange} label="Password" validaciones={{'min-lenght' : 3, 'max-lenght' : 7, 'basicas': ['not-null','email']}}/>
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <TextInput campo="email" onInputChange={this.onInputChange} label="Email" validaciones={{'min-lenght' : 3, 'max-lenght' : 7, 'basicas': ['not-null','email']}}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <ImageInput campo="imagen" onInputChange={this.onInputChange} label="Imagen" validaciones={{'basicas': ['not-null']}}/>
                                                    </div>
                                                </div>

                                                <div class="mt-3">
                                                    <button type="submit" className="btn btn-primary float-right ml-3" disabled={!this.state.formularioValido}>Aceptar</button>
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