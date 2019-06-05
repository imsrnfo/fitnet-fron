import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ImageInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            mensajeInvalido: undefined,
            customImg : false
        }
        this.fileUpload = React.createRef();
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
                           mensajeInvalido: errores[0],
                           customImg: false
                    });
                }else{
                    componente.setState({
                           valor:event.target.result,
                           mensajeInvalido: undefined,
                           customImg: true
                    });
                    valido = true;
                }
                componente.props.onInputChange(componente.props.campo,event.target.result,valido);
            }
        }else{
             this.setState({
                   valor: undefined,
                   mensajeInvalido: 'El campo no puede ser vacio.',
                   customImg: false
            });
            this.props.onInputChange(this.props.campo,undefined,false);
        }
    }

    render() {

        var imgUrl = this.state.customImg ? this.state.valor : window.location.origin + '/img/image-solid.svg';
        var opacidad = this.state.customImg ? 1 : 0.1;
        var sectionStyle = {
            opacity : opacidad,
            backgroundImage:  'url(' + imgUrl + ')'
        };

        return (

            <div>


               <div className="row">
                <div className="mx-auto m-5 col-xl-6 col-lg-10 col-md-10 col-sm-12" >
                  <div className="FlexEmbed FlexEmbed-ratio">
                    <div className="UserImage FlexEmbed-content" style={ sectionStyle } ></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="button" className="btn btn-secondary mx-auto" onClick={event => this.fileUpload.current.click()}>Subir archivo</button>
                <input
                   hidden
                   ref={this.fileUpload}
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


            </div>



        );
    }
}

export default ImageInput;