import React, {useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {

    // Reffs 
    const navUl = useRef(null)
    const navLinks = useRef([])
    const burger = useRef(null)
    const pushNavLinks = (el) => navLinks.current.push(el)
    const htmlOverflow = document.querySelector('body');

    // Toggle Nav
    const navToggleHandler = () => {
        navUl.current.classList.toggle('nav-active')

        navLinks.current.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade .3s ease forwards ${index / 7 + .2}s`
            }
        });
    
        //burger anination
        burger.current.classList.toggle('toggle')
        htmlOverflow.classList.toggle('overflowY')
    }

  return (
    <nav>
        <div className="container">
            <h1 className="title"><Link to="/food-blog">FlavorFiesta </Link></h1>
            <ul ref={navUl}>
                <li>
                <Link ref={pushNavLinks} to="/food-blog">Home</Link>
                </li>
                <li>
                <Link ref={pushNavLinks} to="/search">Search</Link>
                </li>
                <li>
                <Link ref={pushNavLinks} to="/contact">Contact</Link>
                </li>
            </ul>
            <div ref={burger} onClick={navToggleHandler} className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;