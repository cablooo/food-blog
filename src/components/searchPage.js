import React from "react";
import SearchComponent from './SearchComponent'; // Import your SearchComponent
import featuredRecipes from "../data";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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