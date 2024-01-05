import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing components:
import Nav from "./components/Nav";
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';
import ContactPage from './components/contactPage';
import RecipeDetails from "./components/ResipeDeatails";
import featuredRecipes from './data'; // Import your recipe data
import Footer from "./components/Footer";

// Importing styles
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/food-blog" component={HomePage} />
        <Route
          path="/recipe/:id"
          render={(props) => <RecipeDetails {...props} featuredRecipes={featuredRecipes} />}
        />
        <Route path="/search" component={SearchPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
