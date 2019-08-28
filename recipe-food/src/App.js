import React,{useEffect, useState} from 'react';
import './App.css';

import Recipe from './Componentes/Recipe';


const App = () =>{

  const APP_ID = "5400964d";
  const APP_KEY = "c83a30108dbe0893ce646f0e2d025a23";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Procurar</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
          ))};
      </div>
    </div>
  );
}

export default App;
