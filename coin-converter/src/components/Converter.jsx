import React, {useState} from 'react';
import './Converter.css';


const Converter = ({coins, handleValues}) =>{

    const [coinsValue, setcoinsValue] = useState([
        {
            coinA:"0",
            coinB:"0"
        }
    ]);

    const handleChangeOrClick = () => {
        const value = document.querySelector('#input').value;
        console.log(value);
        apiCall(value);
      };


    const apiCall = (value) => {
        const coin1 = document.querySelector('#coin1').value;
        const coin2 = document.querySelector('#coin2').value;
        const de_para = `${coin1}_${coin2}`;
        const key = '7255f0b87adf2b84cca9';
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${key}`;
        fetch(url).then(res =>{
                    return res.json()
                }).then(json=>{
                    let cotacao = json[de_para];
                    let coinB = (parseFloat(value) * cotacao).toFixed(2);
                    console.log(coinB)
                    
                    //VER ISTO
                    setcoinsValue({
                        coinA:value,
                        coinB:coinB
                    })
        })
    }

    
    return (
        <>
           <div className="converter">
                <div className="inline">
                    <select name="coin1" id="coin1">
                        {coins.map((coin) => {return <option key={coin.id} value={coin.id}>{coin.id}</option>})}   
                    </select>
                    <h2>para</h2>
                    <select name="coin2" id="coin2">
                        {coins.map((coin) => {return <option key={coin.id} value={coin.id}>{coin.id}</option>})}   
                    </select>
                </div>
                <input type="text" id="input" onChange={handleChangeOrClick}/>
                <input type="button" value="Converter" onClick={handleChangeOrClick}/>
                {/* ERRO AQUI */}
              <h2>{coinsValue[0].coinB}</h2>
            </div> 
        </>
    );
};


export default Converter;