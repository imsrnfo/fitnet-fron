import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../../../../store';
import {authHttpGet} from '../../../../util/HttpRequest'

class ListaUsuarios extends Component{

    constructor(){
        super();
        this.btnNuevoClick = this.btnNuevoClick.bind(this);

        this.state = {
            usuarios : []
        };

        let componente = this;

        authHttpGet('/usuarios').then(
        function(response) {
            componente.setState({
                usuarios:response.data
            });
        }).catch(function(error) {
                alert(error.response? error.response.data.mensaje : error);
        });

    }

    btnNuevoClick(event){
        this.props.history.push(`/dashboard/usuarios/crear`);
    }

    render(){
        var imgUrl = window.location.origin + '/img/loading_spinner.gif';
        var sectionStyle = {
            background: 'transparent url('+imgUrl+') center no-repeat'
        };

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card closeable-card">
                            <div className="card-header d-flex flex-row  align-items-center">
                                <div className="w-100"> Usuarios</div>
                                <div> <i className="fas fa-times cursor-pointer p-1" onClick="ocultar(this);"></i> </div>
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
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Correo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.usuarios.map(usuario =>
                                            <tr key={usuario.username} >
                                                <td>
                                                    <img style={sectionStyle} height="50" width="50" className="rounded-circle" src={usuario.imagen}/>
                                                </td>
                                                <td>{usuario.username}</td>
                                                <td>{usuario.email}</td>
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

export default ListaUsuarios;