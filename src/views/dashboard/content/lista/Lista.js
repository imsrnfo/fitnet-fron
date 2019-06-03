import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../../../../store';

class Lista extends Component{

    constructor(){
        super();
        this.addToList = this.addToList.bind(this);

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


    addToList(event){
        let elemento = {id : 3, nombre : "silvana", apellido: "risso"};
        store.dispatch({
            type: "ADD_TO_LIST",
            elemento: elemento
        });
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card closeable-card">
                            <div className="card-header d-flex flex-row  align-items-center">
                                <div className="w-100"> Titulo </div>
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

                                    {this.state.elementos.map(elemento =>

                                        <tr>
                                            <th scope="row">{elemento.id}</th>
                                            <td>{elemento.nombre}</td>
                                            <td>{elemento.apellido}</td>
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
                                <button type="submit" className="btn btn-primary float-right ml-3" onClick={this.addToList} >Nuevo</button>
                                <button type="submit" className="btn btn-secondary float-right">Atras</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lista;