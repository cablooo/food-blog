import React from "react";
import SearchComponent from './SearchComponent'; // Import your SearchComponent
import featuredRecipes from "../data";

const searchPage = () => {

    return(
        <div className="search">
            <div className="container">    
                <SearchComponent data={featuredRecipes}/>
            </div>
        </div>
    )
}

export default searchPage