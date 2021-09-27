import React from "react";

const Weather = (props) =>(
    <div>
        {
            props.cidade && props.pais && <p className="weather__key">Localização:
             <span className="weather__value"> {props.cidade}, {props.pais}</span>
             </p> 
        }
        {
            props.temperatura && <p className="weather__key">Temperatura: 
             <span className="weather__value"> {props.temperatura}</span>
             </p>
        }
        {
            props.humidade && <p className="weather__key">Humidade:
             <span className="weather__value"> {props.humidade}</span>
             </p>
        }
        {
            props.descricao && <p className="weather__key">Descrição:
             <span className="weather__value"> {props.descricao}</span>
             </p>
        }     
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);


/*
class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.cidade && this.props.pais && <p>Localização: {this.props.cidade}, {this.props.pais}</p> }
                {this.props.temperatura && <p>Temperatura: {this.props.temperatura}</p>}
                {this.props.humidade && <p>Humidade: {this.props.humidade}</p>}
                {this.props.descricao && <p>Descrição: {this.props.descricao}</p>}     
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};
*/
export default Weather;