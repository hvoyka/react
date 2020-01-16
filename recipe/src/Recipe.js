import React from 'react';


const Recipe = ({ title, calories, image, ingredients }) => {
  calories = Math.round(calories);
  return (
    <div className="recipe">
      <h2 className="recipe-title">{title}</h2>
      <p className="recipe-calories">Calories: {calories}</p>
      <img className="recipe-img" src={image} alt={title} />
      <ol className="recipe-ingredients">
        {ingredients.map(ingredient => (
          <li className="recipe-ingredient">{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;