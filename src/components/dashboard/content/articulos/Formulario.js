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

        this.state = {
            codigo:'',
            nombre: '',
            precioCosto:'',
            precioVenta:'',
            manejarStock: false,
            stockActual: 0,
            activo: false,
            codigoInvalidoMensaje:'',
            nombreInvalidoMensaje:'',
            precioCostoInvalidoMensaje:'',
            precioVentaInvalidoMensaje:'',
            stockActualInvalidoMensaje:'',
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
            httpPost('/articulos/crear',this.state).then(
                function(response) {
                    history.push(`/dashboard/articulos/lista`);
                }).catch(function(error) {
                alert(error);
            });
        }
    }

    btnCancelar(event){
        event.preventDefault();
        this.props.history.push(`/dashboard/articulos/lista`);
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
                                                        <input
                                                            id="inputCodigo"
                                                            value={this.state.codigo}
                                                            className={" form-control "
                                                                + (this.state.formSubmited && this.state.codigoInvalidoMensaje.length>0 ? ' is-invalid ' : '')
                                                                + (this.state.formSubmited && this.state.codigoInvalidoMensaje.length===0 ? ' is-valid ' : '')
                                                            }
                                                            onChange={event=>this.setState({codigo:event.target.value})}
                                                        />
                                                        {this.state.codigoInvalidoMensaje.length>0 &&  <div className="invalid-feedback"> {this.state.codigoInvalidoMensaje} </div>}
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputNombre">Nombre</label>
                                                        <input className="form-control" id="inputNombre" value={this.state.nombre} onChange={event=>this.setState({nombre:event.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label for="inputPrecioCosto">Precio de Costo</label>
                                                        <input className="form-control" id="inputPrecioCosto" value={this.state.precioCosto} onChange={event=>this.setState({precioCosto:event.target.value})}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputPrecioVenta">Precio de Venta</label>
                                                        <input className="form-control" id="inputPrecioVenta" value={this.state.precioVenta} onChange={event=>this.setState({precioVenta:event.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input" id="inputmanejarStock" value={this.state.manejarStock} onChange={event=>this.setState({manejarStock:event.target.checked})}/>
                                                            <label className="custom-control-label" for="inputmanejarStock">Maneja Stock</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputStockActual">Stock Actual</label>
                                                        <input className="form-control" id="inputStockActual" value={this.state.stockActual} onChange={event=>this.setState({stockActual:event.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input" id="inputActivo" value={this.state.activo} onChange={event=>this.setState({activo:event.target.checked})}/>
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