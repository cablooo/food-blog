import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeGrid from "./homeGrid";
import { Link } from 'react-router-dom';
import featuredRecipes from "../data";

const HomePage = () => {

    // Previous Arrow component
const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-prev" onClick={onClick}>Previous</div>; // Replace with your arrow icon or content
  };
  
  // Next Arrow component
  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-next" onClick={onClick}>Next</div>; // Replace with your arrow icon or content
  };
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      const handleLinkClick = () => {
      };

    return(
        <div className="home">
                <div className="welcome-box">
                    <div className="overlay">
                        <h1>Welcome to FlavorFiesta</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Assumenda repellendus quis quaerat? Assumenda animi voluptatum deleniti ut libero, 
                            voluptatibus commodi.
                        </p>
                    </div>
                </div>
            <div className="container">

                
                {/* SLIDER */}
                <h1 className="slider-title-h1">Some of our best resipies</h1>
                <Slider {...settings}>
                    {featuredRecipes.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                          <div className="slider-div">
                            <img src={recipe.image} alt={recipe.title} onClick={handleLinkClick} />
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                          </div>
                        </Link>
                    ))}
                </Slider>
            </div>

            
            <HomeGrid featuredRecipes={featuredRecipes}/>
        </div>
    )
}

export default HomePage