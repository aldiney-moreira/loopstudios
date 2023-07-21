import "./header.scss";
import NavMenu from '../../molecules/NavMenu/NavMenu';

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <NavMenu hamburger />
        <h1 className="header__title">Immersive experiences that deliver</h1>
      </div>
    </header>
  );
}
