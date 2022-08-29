import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{

  const API_ID = "915b029d"
  const API_KEYS = "b7b0d19a9756804d2ca2e5ce31454984"

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getReceipes();
  }, []);

  const getReceipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEYS}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  }

  return (
    <div className ="App" >
      <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe/>
      ))}
    </div>
  )
}

export default App;