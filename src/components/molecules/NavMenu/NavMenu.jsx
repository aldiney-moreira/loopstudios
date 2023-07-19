import React, { useState } from 'react';
import logo from "../../../assets/images/logo.svg";

// import "./header.scss";

export default function NavMenu(props) {
  const DEFAULT_MENU_ITEMS = [
    {
      text: 'About',
      link: '#'
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

  const classStylesHeader = {
    nav: `header__nav${props.hamburger ? '-hamburger' : ''}`,
    menu: `header__menu ${props.hamburger && isOpen ? 'active' : ''}`,
    hamburger: `header__hamburger ${isOpen ? 'active' : ''}`,
    items: props.hamburger ? ` ` : 'header__items',
  };

  return (
    <nav className={classStylesHeader.nav}>
      <picture className="header__picture">
        <img className="header__logo" src={logo} alt="Loopstudios" />
      </picture>
      <div className={classStylesHeader.menu}>
        <ul className="header__items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="header__item" href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {props.hamburger &&
        <div
          className={classStylesHeader.hamburger}
          onClick={toggleMenu}
        >
          <span className="header__bar"></span>
          <span className="header__bar"></span>
          <span className="header__bar"></span>
        </div>
      }
    </nav>
  );
}
