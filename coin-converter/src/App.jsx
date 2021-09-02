import React, {useState, useEffect} from 'react';
import './App.css';

import Converter from './components/Converter'

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const key = '7255f0b87adf2b84cca9';
    let url = `https://free.currconv.com/api/v7/currencies?apiKey=${key}`;

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.results);
            const dataArray = Object.values(json.results);
            console.log(dataArray);
            setCoins(dataArray);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <Converter coins={coins} ></Converter>
    </div>
  );
}

export default App;
