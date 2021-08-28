import React from 'react';
import './Converter.css';


const Converter = ({coins, handleValues}) =>{

    const handleChangeOrClick = () => {
        const value = document.querySelector('#input').value;
        console.log(value);
        apiCall(value);
      };

    const apiCall = (value) => {
        let de_para = `${coins[0].name}_${coins[1].name}`;
        const key = '7255f0b87adf2b84cca9';
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${key}`;
        fetch(url).then(res =>{
                    return res.json()
                }).then(json=>{
                    let cotacao = json[de_para];
                    let coinB = (parseFloat(value) * cotacao).toFixed(2);
                    console.log(coinB)
                    handleValues(value,coinB)
        })
    }
    //TODO: BUILD SELECT FOR NAMES and dynamic value for second coin 
    return (
        <>
           <div className="converter">
                <h2>{coins[0].name} para {coins[1].name}</h2>
                <input type="text" id="input" onChange={handleChangeOrClick}/>
                <input type="button" value="Converter" onClick={handleChangeOrClick}/>
                <h2>{coins[1].value}</h2>
            </div> 
        </>
    );
};


export default Converter;