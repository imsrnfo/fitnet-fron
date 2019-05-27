import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../../../../store';
import {httpGet} from '../../../../util/HttpRequest'

class ListaArticulos extends Component{

    constructor(){
        super();
        this.btnNuevoClick = this.btnNuevoClick.bind(this);

        this.state = {
            articulos : []
        };

        store.subscribe(()=>{
           this.setState({
               articulos:store.getState().articulos
           });
        });

        httpGet('/articulos').then(
        function(response) {
            store.dispatch({
               type: "SET_ARTICULOS",
               articulos: response.data
           });
        }).catch(function(error) {
                alert(error);
        });

    }

    btnNuevoClick(event){
        this.props.history.push(`/dashboard/articulos/crear`);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card closeable-card">
                            <div className="card-header d-flex flex-row  align-items-center">
                                <div className="w-100"> Articulos</div>
                                <div> <i className="fas fa-times cursor-pointer p-1" onclick="ocultar(this);"></i> </div>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <input type="text" className="form-control datepicker" id="inputDesde" placeholder="F. Desde" />
                                    </div>
                                    <div className="col-md-2">
                                        <input type="text" className="form-control datepicker" id="inputHasta" placeholder="F. Hasta" />
                                    </div>
                                    <div className="col-md-2 offset-6">
                                        <button type="submit" className="btn btn-secondary float-right"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {this.state.articulos.map(articulo =>

                                        <tr>
                                            <th scope="row">{articulo.codigo}</th>
                                            <td>{articulo.nombre}</td>
                                            <td>{articulo.precioVenta}</td>
                                            <td></td>
                                        </tr>

                                    )}
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <button className="btn btn-primary float-right ml-3" onClick={this.btnNuevoClick} >Nuevo</button>
                                <button className="btn btn-secondary float-right">Atras</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListaArticulos;