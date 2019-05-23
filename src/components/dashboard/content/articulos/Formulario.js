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
                                <div className="col-4 text-center">
                                  <div className="row">
                                    <div className="mx-auto m-5 col-xl-6 col-lg-10 col-md-10 col-sm-12" >
                                      <div className="FlexEmbed FlexEmbed-ratio">
                                        <div className="UserImage FlexEmbed-content" style={ sectionStyle } ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <button type="button" className="btn btn-secondary mx-auto">Subir archivo</button>
                                  </div>
                                </div>
                                <div className="col-8">
                                  <form className="was-validated">
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label for="inputAddress">Address</label>
                                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="inputAddress2">Address 2</label>
                                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="form-row">
                                      <div className="col-md-6 mb-3">
                                        <label for="validationServer03">City</label>
                                        <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                                        <div className="invalid-feedback">
                                          Please provide a valid city.
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label for="validationServer04">State</label>
                                        <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                                        <div className="invalid-feedback">
                                          Please provide a valid state.
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label for="validationServer05">Zip</label>
                                        <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                                        <div className="invalid-feedback">
                                          Please provide a valid zip.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                          Check me out
                                        </label>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label for="inputFnac">Fecha Nacimiento</label>
                                      <input type="text" className=" datepicker form-control" id="inputFnac" />
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                      <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                      <label className="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
                                      <div className="invalid-feedback">Example invalid feedback text</div>
                                    </div>

                                    <button type="submit" className="btn btn-primary float-right ml-3">Aceptar</button>
                                    <button type="submit" className="btn btn-secondary float-right">Cancelar</button>
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