import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sidebar extends Component{

    render(){
        return(
            <nav id="sidebar" className="bg-dark text-light">
               <div className={"small sidebar-header" + (this.props.customStyle===undefined ? ' sidebar-background ' : '')}>
                 <h3>
                   <div className="pt-3 pb-3">
                     <img height="50" className="rounded-circle" src="/img/ignacio.jpg"/>
                     <div className="pt-2">
                       <small>Nombre usuario</small>
                     </div>
                   </div>
                 </h3>
                 <strong>
                   <div>
                     <div className="container-logo">
                       <img height="50" src="/img/fitnet-icon.png"/>
                     </div>
                   </div>
                 </strong>
               </div>

               <ul className="list-unstyled components small">
                 <li>
                   <a href="#">
                     <i className="fa fa-home"></i>
                     Inicio
                   </a>
                 </li>
                 <li>
                   <a href="#gestionarSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fa fa-cogs"></i>Gestionar
                   </a>
                   <ul className="collapse list-unstyled" id="gestionarSubmenu">
                     <li><Link to="/dashboard/home">Formulario</Link></li>
                     <li><Link to="/dashboard/lista">Lista</Link></li>
                     <li><a href="#"><i className="fa fa-cogs"></i>Socios</a></li>
                     <li><a href="#">Panel de Acceso</a></li>
                     <li><a href="#">Cobros</a></li>
                   </ul>
                 </li>
                 <li>
                   <a href="#anulacionesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fa fa-times"></i>Anulaciones
                   </a>
                   <ul className="collapse list-unstyled" id="anulacionesSubmenu">
                     <li><a href="#">Cobros</a></li>
                     <li><a href="#">Movimientos varios</a></li>
                   </ul>
                 </li>
                 <li>
                   <a href="#cajaSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fas fa-dollar-sign"></i>Caja
                   </a>
                   <ul className="collapse list-unstyled" id="cajaSubmenu">
                     <li><a href="#">Movimientos varios</a></li>
                   </ul>
                 </li>
                 <li>
                   <a href="#estadisticasSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fas fa-chart-line"></i>Estadisticas
                   </a>
                   <ul className="collapse list-unstyled" id="estadisticasSubmenu">
                     <li><a href="#">Generales</a></li>
                     <li><a href="#">Socios</a></li>
                   </ul>
                 </li>
                 <li>
                   <a href="#configuracionSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fas fa-cog"></i>Configuracion
                   </a>
                   <ul className="collapse list-unstyled" id="configuracionSubmenu">
                     <li><a href="#">Usuarios</a></li>
                     <li><a href="#">Actividades</a></li>
                     <li><a href="#">Conceptos</a></li>
                     <li><Link to="/dashboard/articulos/lista">Articulos</Link></li>
                   </ul>
                 </li>
                 <li>
                   <a href="#reportesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                     <i className="fas fa-print"></i>Reportes
                   </a>
                   <ul className="collapse list-unstyled" id="reportesSubmenu">
                     <li><a href="#">Cobros</a></li>
                     <li><a href="#">Deudas</a></li>
                     <li><a href="#">Movimientos Varios</a></li>
                   </ul>
                 </li>
               </ul>

               <ul className="list-unstyled CTAs border-light border-top">
                 <li>
                   <a href="https://fitnet.com.uy" className="download text-center">
                     <div className="pb-3">
                       powered by: <h6>Fitnet</h6>
                     </div>
                     <img height="100" src="/img/fitnet-icon.png"/>
                   </a>
                 </li>
                 <li>

                 </li>
               </ul>
             </nav>
        );
    }
}

export default Sidebar;