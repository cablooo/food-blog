import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Footer = () => {

    return(
        <footer>
            <div className="container">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Dicta pariatur consectetur voluptatum mollitia saepe cumque error culpa quisquam nam libero.
                </p>
                <div>
                    <FontAwesomeIcon icon={faCopyright} />
                </div>  
            </div>
        </footer>
    )
}

export default Footer