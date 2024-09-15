import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import '/public/css/navbar-style.css'

const Navbar = () => {

  const isNavbar = useMediaQuery({ maxWidth: 768 });

  const [active, setActive] = useState(false);


  const handleMenu = () => {
    active ? setActive(false) : setActive(true);
  }

  return (
    <header>
        <nav>
            <h1>.Logo</h1>
            {!isNavbar ? 
              <ul className="content-container">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link id="buynow">Buy now</Link></li>
              </ul>
              :
              <>
              <ul className="content-container" style={active ? {display: "block"} : {right: "-8rem"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link>Buy now</Link></li>
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