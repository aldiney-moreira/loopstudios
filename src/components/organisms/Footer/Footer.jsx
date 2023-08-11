import "./footer.scss";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import logo_facebook from "../../../assets/images/icon-facebook.svg";
import logo_twitter from "../../../assets/images/icon-twitter.svg";
import logo_pinterest from "../../../assets/images/icon-pinterest.svg";
import logo_instagram from "../../../assets/images/icon-instagram.svg";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <NavMenu />
        <ul className="footer__social">
          <li className="footer__icon">
            <a href="#">
              <img src={logo_facebook} alt="" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#">
              <img src={logo_twitter} alt="" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#">
              <img src={logo_pinterest} alt="" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#">
              <img src={logo_instagram} alt="" />
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
