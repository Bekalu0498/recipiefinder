// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import RecipeSearch from './Components/recepie';
import RecipeList from './Components/list';
import './App.css'; 
const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredient) => {
    const APP_ID = 'bbd5db80'; // Replace with your actual App ID
    const APP_KEY = '4471f8fedc97d941d690f502e5486677'; // Replace with your actual App Key
  
    try {
      const response = await axios.get('https://api.edamam.com/search', {
        params: {
          q: ingredient,
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      });
      setRecipes(response.data.hits.map(hit => hit.recipe));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <RecipeSearch onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;