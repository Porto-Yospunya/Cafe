import React from 'react';
import { CartOutline } from 'react-ionicons';

import { menus } from '../database.test';

import '/public/css/menu-style.css';

const MenuPage = () => {
  return (
    <>
        <div className="bg-img-menu">
            <div className="title">
                <h1>Menu</h1>
            </div>
        </div>
        <article>
            <section className="menu">
                {menus.map(menu => (
                    <div className="menu-container">
                        <img src={menu.img} alt="" />
                        <div className="menu-content">
                            <h4>{menu.name}</h4>
                            <p>${menu.price}</p>
                        </div>
                        <div className="cart-container">
                            <button><CartOutline cssClasses={"cart-icon"}/> Add in Cart </button>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    </>
  );
}

export default MenuPage;