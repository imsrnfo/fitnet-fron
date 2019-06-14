import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class PaginationComponent extends React.Component {

    constructor(props) {
        super(props);
        var paginaActual = parseInt(this.props.paginaActual);
        if (paginaActual <= 1){
            this.state = {
                paginaIzq: 1,
                paginaMid: 2,
                paginaDer: 3,
                total: this.props.totalPaginas
            }
        }else{
            this.state = {
                paginaIzq: paginaActual-1,
                paginaMid: paginaActual,
                paginaDer: paginaActual+1,
                total: this.props.totalPaginas
            }
        }
    }

    render() {
        return (
           <nav aria-label="Page navigation example">
               <ul className="pagination justify-content-center">
                   <li className={"page-item" + paginaIzq === 1 ? "disabled" : ""}>
                       <a className="page-link" href="#" aria-label="Previous" onClick={() => this.props.onPaginaClick(this.props.paginaActual-1)}>
                           <span aria-hidden="true">&laquo;</span>
                           <span className="sr-only">Previous</span>
                       </a>
                   </li>
                   <li className="page-item"><Link onClick={() => this.props.onPaginaClick(this.state.paginaIzq)} to={"/dashboard/usuarios/lista/"+this.state.paginaIzq} className="page-link">{this.state.paginaIzq}</Link></li>
                   <li className="page-item"><Link onClick={() => this.props.onPaginaClick(this.state.paginaMid)} to={"/dashboard/usuarios/lista/"+this.state.paginaMid} className="page-link">{this.state.paginaMid}</Link></li>
                   <li className="page-item"><Link onClick={() => this.props.onPaginaClick(this.state.paginaDer)} to={"/dashboard/usuarios/lista/"+this.state.paginaDer} className="page-link">{this.state.paginaDer}</Link></li>
                   <li className="page-item">
                       <a className="page-link" href="#" aria-label="Next" onClick={() => this.props.onPaginaClick(this.props.paginaActual+1)}>
                           <span aria-hidden="true">&raquo;</span>
                           <span className="sr-only">Next</span>
                       </a>
                   </li>
               </ul>
           </nav>
        );
    }
}

export default PaginationComponent;