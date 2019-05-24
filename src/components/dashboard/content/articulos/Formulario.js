import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Imagen from './img/fitnet-icon.png';
import store from '../../../../store';

var sectionStyle = {
    backgroundImage:  `url(${Imagen})`
};

class FormularioArticulos extends Component{

    constructor(){
        super();
        this.btnNuevoClick = this.btnNuevoClick.bind(this);

        store.subscribe(()=>{
           this.setState({
               elementos:store.getState().elementos
           });
        });

        this.state = {
            elementos : [
                {id : 1, nombre : "nacho", apellido: "silva"},
                {id : 2, nombre : "diego", apellido: "silva"},
            ]
        }
    }


    btnNuevoClick(event){
        this.props.history.push(`/dashboard/articulos/formulario`);
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
                                  <form>

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
                                        <input className="form-control" id="PrecioCosto" />
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label for="inputPrecioVenta">Precio de Venta</label>
                                        <input className="form-control" id="PrecioVenta" />
                                      </div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                          <label className="custom-control-label" for="customControlValidation1">Maneja Stock</label>
                                        </div>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label for="inputPrecioVenta">Precio de Venta</label>
                                        <input className="form-control" id="PrecioVenta" />
                                      </div>
                                    </div>

                                    <div class="mt-3">
                                        <button type="submit" className="btn btn-primary float-right ml-3">Aceptar</button>
                                        <button type="submit" className="btn btn-secondary float-right">Cancelar</button>
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