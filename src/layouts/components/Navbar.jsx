import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import '/public/css/navbar-style.css'

const Navbar = () => {

  const isNavbar = useMediaQuery({ maxWidth: 768 });

  const [active, setActive] = useState(false);


  const handleMenu = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <header>
        <nav>
            <h1>Logo</h1>
            {!isNavbar ? 
              <ul className="content-container">
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#gallery">Gallery</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="" id="buynow">Buy now</a></li> 
              </ul>
              :
              <>
              <ul className="content-container" style={active ? {display: "block"} : {left: "100vh"}}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Buy now</a></li> 
              </ul>
              <button className="menu-bar" onClick={handleMenu} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              </>
            }
            
        </nav>
    </header>
  );
}

export default Navbar;