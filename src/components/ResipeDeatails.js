import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ featuredRecipes }) => {
  const { id } = useParams(); // Get the recipe ID from the URL params

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = featuredRecipes.find((recipe) => recipe.id === id);

    // Update state with the found recipe or set to null if not found
    setRecipe(foundRecipe || null);
  }, [id, featuredRecipes]);

  return (
    <div>
      {recipe ? (
        <div className='recipe-detail'>
          <div className="container">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-text-box">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
            {/* Display other details of the recipe */}
          </div>
        </div>
      ) : (
        <div className='Recipe-not-found'><h1>Meal not found, please go back to home page</h1></div>
      )}
    </div>
  );
};

export default RecipeDetails;