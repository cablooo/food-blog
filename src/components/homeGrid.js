import React, {useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

const HomeGrid = ({ featuredRecipes }) => {
  

    return(
        <div className="home-grid">
            <div className="container">
                {featuredRecipes.map((recipe) => (
                        <div className="grid-box" id={recipe.id} key={recipe.id}>
                            
                            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>   
                                <img src={recipe.image} alt={recipe.title} />                            
                            </Link>
                            <div className="text-box">   
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default HomeGrid;