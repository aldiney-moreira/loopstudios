import "./navMenu.scss";

import React, { useState } from "react";
import logo from "/images/logo.svg";

export default function NavMenu(props) {
  const DEFAULT_MENU_ITEMS = [
    {
      text: "About",
      link: "#",
    },
    {
      text: "Careers",
      link: "#",
    },
    {
      text: "Events",
      link: "#",
    },
    {
      text: "Products",
      link: "#",
    },
    {
      text: "Support",
      link: "#",
    },
  ];

  const menuItems = props.menuItems || DEFAULT_MENU_ITEMS;

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", () => {
    const $nav = document.querySelector("#nav-menu");
    $nav.classList.toggle("scroll", window.scrollY > 75);
  });

  const classStylesNavMenu = {
    nav: `nav-menu${props.hamburger ? "--hamburger" : ""}`,
    menu: `nav-menu__menu ${props.hamburger && isOpen ? "active" : ""}`,
    hamburger: `nav-menu__hamburger ${isOpen ? "active" : ""}`,
  };

  return (
    <nav id="nav-menu" className={classStylesNavMenu.nav}>
      <a href="#">
        <img
          width="192"
          height="32"
          className="nav-menu__logo"
          src={logo}
          alt="Loopstudios"
        />
      </a>
      <div className={classStylesNavMenu.menu}>
        <ul className="nav-menu__items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="nav-menu__item text--regular" href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {props.hamburger && (
        <div className={classStylesNavMenu.hamburger} onClick={toggleMenu}>
          <span className="nav-menu__bar"></span>
          <span className="nav-menu__bar"></span>
          <span className="nav-menu__bar"></span>
        </div>
      )}
    </nav>
  );
}
