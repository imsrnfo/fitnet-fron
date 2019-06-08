import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Home from './content/home/Home'
import Lista from './content/lista/Lista'
import ListaArticulos from './content/articulos/Lista'
import FormularioArticulos from './content/articulos/Formulario'
import ListaUsuarios from './content/usuarios/Lista'
import FormularioUsuarios from './content/usuarios/Formulario'
import {httpGet} from '../../util/HttpRequest'
import LoadingSpinner from '../../components/loading/LoadingSpinner'

import axios from 'axios';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            stylePath: undefined //'https://bootswatch.com/4/cerulean/bootstrap.min.css'
        };
    }

    componentDidMount() {
        this.refs.child.ocultarLoading();
        /*let { history } = this.props;
        httpGet('/admins').then(
        function(response) {
           window.ocultarLoading();
        }).catch(function(error) {
            history.push(`/login`);
        });*/
       // this.setState({stylePath: 'https://bootswatch.com/4/cyborg/bootstrap.min.css'});
    }

    render(){
        return(
         <div>
             <link rel="stylesheet" type="text/css" href={this.state.stylePath}/>
             <LoadingSpinner ref="child" fullScreen="true" />
             <div className="wrapper">
                  <Sidebar customStyle={this.state.stylePath}></Sidebar>
                  <div id="content">
                   <Header></Header>
                    <div id="page-content" className="p-5">
                        <Route path="/dashboard/home" component={Home} />
                        <Route path="/dashboard/lista" component={Lista} />
                        <Route path="/dashboard/articulos/lista" component={ListaArticulos} />
                        <Route path="/dashboard/articulos/crear" component={FormularioArticulos} />
                        <Route path="/dashboard/usuarios/lista" component={ListaUsuarios} />
                        <Route path="/dashboard/usuarios/crear" component={FormularioUsuarios} />
                    </div>
                  </div>
             </div>
         </div>
        );
    }

}

export default Dashboard;