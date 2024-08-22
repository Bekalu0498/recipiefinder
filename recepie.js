// src/components/recepie.js
import React, { useState } from 'react';

const RecipeSearch = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    onSearch(ingredient);
    setIngredient('');
  };

  return (
    <div>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredients"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;