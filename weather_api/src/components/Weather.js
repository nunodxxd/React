import React from "react";

const Weather = (props) =>(
    <div>
        {props.cidade && props.pais && <p>Localização: {props.cidade}, {props.pais}</p> }
        {props.temperatura && <p>Temperatura: {props.temperatura}</p>}
        {props.humidade && <p>Humidade: {props.humidade}</p>}
        {props.descricao && <p>Descrição: {props.descricao}</p>}     
        {props.error && <p>{props.error}</p>}
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