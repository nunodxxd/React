import React, {useState} from 'react';
import './App.css';

import Converter from './components/Converter'

function App() {

  // TODO : GET DYNAMIC COINS https://free.currconv.com/api/v7/currencies?apiKey=7255f0b87adf2b84cca9
  const [coins, setCoins] = useState([
    {
      name: 'EUR',
      value: 0
    },
    {
      name: 'USD',
      value: 0
    }
  ]);

  const handleValues= (inputValueA, inputValueB) => {
    const newValues = [
      {
        name: 'EUR',
        value: inputValueA
      },
      {
        name: 'USD',
        value: inputValueB
      }
    ];

    setCoins(newValues);
  };

  return (
    <div className="App">
      <Converter coins={coins} handleValues={handleValues} ></Converter>
    </div>
  );
}

export default App;
