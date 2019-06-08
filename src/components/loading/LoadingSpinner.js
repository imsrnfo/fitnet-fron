import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/loading.css'
import {randomUniqueId} from '../../util/IdGenerator'

class LoadingSpinner extends React.Component {

    constructor(props) {
        super(props);
        this.ocultarLoading = this.ocultarLoading.bind(this);
        this.mostrarLoading = this.mostrarLoading.bind(this);
        this.state = {
            id: randomUniqueId("prefijo")
        };
    }

    ocultarLoading(){
        window.ocultarLoading(this.state.id);
    }

     mostrarLoading(){
        window.mostrarLoading(this.state.id);
    }

    render() {
        return (
            <div id={this.state.id} className={this.props.fullScreen ? "loading-screen" : "loading-component"}>
                <div className={this.props.fullScreen ? "loading-spinner" : "loading-spinner-component"} >
                    <div className="lds-ring">
                        <div className="border-bottom border-primary"></div>
                        <div className="border-bottom border-primary"></div>
                        <div className="border-bottom border-primary"></div>
                        <div className="border-bottom border-primary"></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LoadingSpinner;