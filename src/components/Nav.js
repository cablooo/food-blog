import React, {useRef} from 'react';

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
            <h1 className="title"><a href="/">FlavorFiesta </a></h1>
            <ul ref={navUl}>
                <li>
                <a ref={pushNavLinks} href="/">Home</a>
                </li>
                <li>
                <a ref={pushNavLinks} href="/search">Search</a>
                </li>
                <li>
                <a ref={pushNavLinks} href="/contact">Contact</a>
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