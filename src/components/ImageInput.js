import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ImageInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            mensajeInvalido: undefined
        }
         this.validar = this.validar.bind(this);
    }

    validar(event){
        let files = event.target.files;
        if (files.length>0){
            let componente = this;

            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload=(event)=>{
                console.warn("imagen: " , event.target.result);

                componente.setState(
                {
                    valor:event.target.result,
                     mensajeInvalido: ''
                });

                var errores = [];

                if (componente.props.validaciones.basicas.indexOf("not-null") > -1){
                    if (event.target.result.length==0){
                        errores.push('El campo no puede ser vacio.');
                    }
                }

               var valido = false;
               if (errores.length>0){
                    componente.setState({
                           valor:event.target.result,
                           mensajeInvalido: errores[0]
                    });
                }else{
                    valido = true;
                }
                componente.props.onInputChange(componente.props.campo,event.target.result,valido);
            }
        }else{
             this.setState({
                   valor: undefined,
                   mensajeInvalido: 'El campo no puede ser vacio.'
            });
            this.props.onInputChange(this.props.campo,undefined,false);
        }
    }

    render() {
        return (
           <div className="form-group">
               <label for="inputImagen">{this.props.label}</label>
               <input
                   id="inputImagen"
                   type="file" name="file"
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

export default ImageInput;