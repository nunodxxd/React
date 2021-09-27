import React,{useState} from 'react';
import './App.css';

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


function App(){
  const [weather,setWeather] = useState([]);

  const getWeather = async (e) =>{
    e.preventDefault();
    const cidade = e.target.cidade.value;
    const pais = e.target.pais.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(cidade && pais){
      console.log(data);
      setWeather({
        temperatura: data.main.temp,
        cidade: data.name,
        pais: data.sys.country,
        humidade: data.main.humidity,
        descricao: data.weather[0].description,
        error: ""
      });
    } else{
      setWeather({
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        humidade: undefined,
        descricao: undefined,
        error: "insira um valor."
      });
    }
  }

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
                  <Form getWeather={getWeather}/>
                  <Weather 
                    temperatura={weather.temperatura}
                    cidade={weather.cidade}
                    pais={weather.pais}
                    humidade={weather.humidade}
                    descricao={weather.descricao}
                    error={weather.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  
};


export default App;


