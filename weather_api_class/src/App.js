import React from 'react';
import './App.css';

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class App extends React.Component{
  state={
    temperatura: undefined,
    cidade: undefined,
    pais: undefined,
    humidade: undefined,
    descricao: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const cidade = e.target.cidade.value;
    const pais = e.target.pais.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(cidade && pais){
      console.log(data);
      this.setState({
        temperatura: data.main.temp,
        cidade: data.name,
        pais: data.sys.country,
        humidade: data.main.humidity,
        descricao: data.weather[0].description,
        error: ""
      });
    } else{
      this.setState({
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        humidade: undefined,
        descricao: undefined,
        error: "insira um valor."
      });
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Titles/>
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperatura={this.state.temperatura}
                    cidade={this.state.cidade}
                    pais={this.state.pais}
                    humidade={this.state.humidade}
                    descricao={this.state.descricao}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
};


export default App;


