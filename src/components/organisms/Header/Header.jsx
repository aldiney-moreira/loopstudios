import React, { useState } from 'react';
import logo from "../../../assets/images/logo.svg";

import "./header.scss";

export default function Header(props) {
  const DEFAULT_MENU_ITEMS = [
    {
      text: 'About',
      link: 'https://www.youtube.com/results?search_query=readme+front+end+mentor'
    },
    {
      text: 'Careers',
      link: '#'
    },
    {
      text: 'Events',
      link: '#'
    },
    {
      text: 'Products',
      link: '#'
    },
    {
      text: 'Support',
      link: '#'
    }
  ];

  const menuItems = props.menuItems || DEFAULT_MENU_ITEMS;

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <picture className="header__picture">
            <img className="header__logo" src={logo} alt="Logo" />
          </picture>
          <div className={`header__menu ${isOpen ? 'active' : ''}`}>
            <ul className="header__items container">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a className="header__item" href={item.link}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`header__hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span className="header__bar"></span>
            <span className="header__bar"></span>
            <span className="header__bar"></span>
          </div>
        </nav>
        <h1 className="header__title">Immersive experiences that deliver</h1>
      </div>
    </header>
  );
}
