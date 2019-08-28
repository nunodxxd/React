import React from 'react';
import  './recipe.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <h3>Passo a passo:</h3>
            <ol>
                {ingredients.map( ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calorias: {calories.toFixed(2)}</p>
            <img className="image" src={image} alt=""/>
        </div>
    )
}

export default Recipe;