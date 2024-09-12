import React from 'react';
import { LogoFacebook, LogoTwitter, LogoInstagram } from 'react-ionicons';

import '/public/css/footer-style.css'

const Footer = () => {
  return (
    <footer>
        <div className="contact-container" id="contact">
            <a href="">
                <LogoFacebook color={"#ffffff"} width={"50px"} height={"50px"} />
                <h4>Facebook</h4>
            </a>
            <a href="">
                <LogoTwitter color={"#ffffff"} width={"50px"} height={"50px"} />
                <h4>Twitter</h4>
            </a>
            <a href="">
                <LogoInstagram color={"#ffffff"} width={"50px"} height={"50px"} />
                <h4>Instagram</h4>
            </a>
        </div>
        <div className="copyright">
            <h4>&copy; All Copyright 2024 by Porto</h4>
        </div>
    </footer>
  );
}

export default Footer;