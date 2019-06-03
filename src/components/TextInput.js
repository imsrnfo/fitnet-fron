import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            mensajeInvalido: undefined
        }
         this.validar = this.validar.bind(this);
    }

    validar(event){
         this.setState(
            {
                valor:event.target.value,
                 mensajeInvalido: ''
            }
        );
        var errores = [];

        //hay que ordenar las validaciones segun las prioridades

        if (this.props.validaciones.basicas.indexOf("not-null") > -1){
            if (event.target.value.length==0){
                errores.push('El campo no puede ser vacio.');
            }
        }

       if (this.props.validaciones["min-lenght"] !== undefined){
            if (event.target.value.length<this.props.validaciones['min-lenght']){
                errores.push('El campo debe tener mas de ' + this.props.validaciones['min-lenght'] + ' caracteres.');
            }
        }

        if (this.props.validaciones["max-lenght"] !== undefined){
            if (event.target.value.length>this.props.validaciones['max-lenght']){
                errores.push('El campo debe tener menos de ' + this.props.validaciones['max-lenght'] + ' caracteres.');
            }
        }

        if (this.props.validaciones.basicas.indexOf("email") > -1){
            if (!event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                errores.push('El formato del email no es valido.');
            }
        }

        if (this.props.validaciones["regex"] !== undefined){
            if (!event.target.value.match(this.props.validaciones["regex"])){
                errores.push('El formato del campo es invalido.');
            }
        }

        var valido = false;
       if (errores.length>0){
            this.setState({
                   valor:event.target.value,
                   mensajeInvalido: errores[0]
            });
        }else{
            valido = true;
        }
        this.props.onInputChange(this.props.campo,event.target.value,valido);
    }

    render() {
        return (
           <div className="form-group">
               <label for="inputText">{this.props.label}</label>
               <input
                   id="inputText"
                   value={this.state.valor}
                   className={" form-control "
                       + (this.state.mensajeInvalido!==undefined && this.state.mensajeInvalido.length>0 ? ' is-invalid ' : '')
                       + (this.state.mensajeInvalido!==undefined && this.state.mensajeInvalido.length===0 ? ' is-valid ' : '')
                   }
                   onChange={this.validar}
               />
               {this.state.mensajeInvalido!==undefined && this.state.mensajeInvalido.length>0 &&  <div className="invalid-feedback"> {this.state.mensajeInvalido} </div>}
           </div>
        );
    }
}

export default TextInput;