import "./header.scss"
import logo from "../../../assets/images/logo.svg";

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

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <picture className="header__picture">
            <img className="header__logo" src={logo} alt="Logo"></img>
          </picture>
          <div class="header__hamburger">
            <span class="header__bar"></span>
            <span class="header__bar"></span>
            <span class="header__bar"></span>
          </div>
          <ul className="header__items">
            {menuItems.map((item, index) => (
              <li key={index}><a className="header__item" href={item.link}>{item.text}</a></li>
            ))}
          </ul>
        </nav>
        <h1 className="header__title">Immersive experiences that deliver</h1>
      </div>
    </header>
  );
}