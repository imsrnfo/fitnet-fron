import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Home from './content/home/Home'
import Lista from './content/lista/Lista'
import {httpGet} from '../../util/HttpRequest'

class Dashboard extends Component{

    componentDidMount() {
        window.ocultarLoading();
        /*let { history } = this.props;
        httpGet('/admins').then(
        function(response) {
           window.ocultarLoading();
        }).catch(function(error) {
            history.push(`/login`);
        });*/
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
                  <Sidebar></Sidebar>
                  <div id="content">
                   <Header></Header>
                    <div id="page-content" className="p-5">
                         <Route path="/dashboard/home" component={Home} />
                        <Route path="/dashboard/lista" component={Lista} />
                    </div>
                  </div>
             </div>
         </div>
        );
    }

}

export default Dashboard;