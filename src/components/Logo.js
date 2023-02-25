import React from "react";
import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import '../stylesheets/Logo.css';

function Logo(){
    return(
        <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freecodecamp logo'/>
      </div>
    );
}

export default Logo;