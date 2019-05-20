import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Imagen from './img/fitnet-icon.png';

var sectionStyle = {
    backgroundImage:  `url(${Imagen})`
};

class Home extends Component{

    constructor(props) {
        super(props);

        let authToken = localStorage.getItem("JWT");
        if (authToken === null) {
            // This means that there ISN'T JWT and no user is logged in.
            axios.defaults.headers.common.Authorization = null;
            this.props.history.push(`/login`);
        } else {
            // This means that there IS a JWT so someone must be logged in.
            axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;

            //alert("Inicio!");
            axios.get("http://localhost:8080/admins", {} ).then(function(response) {
                //alert("Datos Obtenidos!");

            }).catch(function(error) {
                //alert("Datos NO Obtenidos :(");
            });
        }

    }

    componentDidMount() {
      window.initDatePicker();
    }

    render(){
        return(
            <div>

                <div id="loading-screen">
                    <div id="loading-spinner">
                        <div className="lds-ring">
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                        </div>
                    </div>
                </div>

                   <div className="wrapper">
                     <nav id="sidebar" className="bg-dark text-light">
                       <div className="sidebar-header small">
                         <h3>
                           <div className="pt-3 pb-3">
                             <img height="50" className="rounded-circle" src="./img/ignacio.jpg"/>
                             <div className="pt-2">
                               <small>Nombre usuario</small>
                             </div>
                           </div>
                         </h3>
                         <strong>
                           <div>
                             <div className="container-logo">
                               <img height="50" src="./img/fitnet-icon.png"/>
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
                             <li><a href="#">Articulos</a></li>
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
                             <img height="100" src="./img/fitnet-icon.png"/>
                           </a>
                         </li>
                         <li>

                         </li>
                       </ul>
                     </nav>


                     <div id="content">

                       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                         <div className="container-fluid">

                           <button type="button" id="sidebarCollapse" className="btn btn-primary">
                             <i className="fas fa-align-left"></i>
                           </button>
                           <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <i className="fas fa-align-justify"></i>
                           </button>

                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                             <ul className="nav navbar-nav ml-auto">
                               <li className="nav-item active">
                                 <a className="nav-link" href="#">Nombre Usuario</a>
                               </li>
                               <li className="nav-item">
                                 <a className="nav-link" href="#">Logout</a>
                               </li>
                             </ul>
                           </div>
                         </div>
                       </nav>

                       <div id="page-content" className="p-5">



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
                                     <tr>
                                       <th scope="row">1</th>
                                       <td>Mark</td>
                                       <td>Otto</td>
                                       <td>@mdo</td>
                                     </tr>
                                     <tr>
                                       <th scope="row">2</th>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                     </tr>
                                     <tr>
                                       <th scope="row">3</th>
                                       <td>Larry</td>
                                       <td>the Bird</td>
                                       <td>@twitter</td>
                                     </tr>
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
                                   <button type="submit" className="btn btn-primary float-right ml-3">Nuevo</button>
                                   <button type="submit" className="btn btn-secondary float-right">Atras</button>
                                 </div>
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

export default Home;