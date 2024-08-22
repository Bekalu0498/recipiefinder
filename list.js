// src/components/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.label}</h3>
          <img src={recipe.image} alt={recipe.label} />
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;