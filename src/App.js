import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const API_ID = "915b029d"
  const API_KEYS = "b7b0d19a9756804d2ca2e5ce31454984"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    getReceipes();
  }, [query]);

  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEYS}`
      );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search)
  };

  const getSearch = e => {
    e.preventDefault();     //to stop reloading of page
    setQuery(search);
  }

  return (
    <div className="App" >
      <form onSubmit={getSearch}  className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;