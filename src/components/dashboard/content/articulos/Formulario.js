import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Imagen from './img/fitnet-icon.png';
import store from '../../../../store';
import {httpPost} from "../../../../util/HttpRequest";

var sectionStyle = {
    backgroundImage:  `url(${Imagen})`
};

class FormularioArticulos extends Component{

    constructor(){
        super();
        this.btnCancelar = this.btnCancelar.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event){
        event.preventDefault();
        let { history } = this.props;
        httpPost('/articulos/crear',{}).then(
            function(response) {
                alert(response);
            }).catch(function(error) {
            alert(error);
        });
    }

    btnCancelar(event){
        this.props.history.push(`/dashboard/articulos`);
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
                                                        <label for="inputCodigo">Codigo</label>
                                                        <input className="form-control" id="inputCodigo" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputNombre">Nombre</label>
                                                        <input className="form-control" id="inputNombre" />
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label for="inputPrecioCosto">Precio de Costo</label>
                                                        <input className="form-control" id="inputPrecioCosto" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputPrecioVenta">Precio de Venta</label>
                                                        <input className="form-control" id="inputPrecioVenta" />
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input" id="inputManejaStock" required />
                                                            <label className="custom-control-label" for="inputManejaStock">Maneja Stock</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputStockActual">Stock Actual</label>
                                                        <input className="form-control" id="inputStockActual" />
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input" id="inputActivo" required />
                                                            <label className="custom-control-label" for="inputActivo">Activo</label>
                                                        </div>
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