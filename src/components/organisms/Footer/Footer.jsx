import "./footer.scss";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import logo_facebook from "../../../assets/images/icon-facebook.svg";
import logo_twitter from "../../../assets/images/icon-twitter.svg";
import logo_pinterest from "../../../assets/images/icon-pinterest.svg";
import logo_instagram from "../../../assets/images/icon-instagram.svg";

export default function Footer(props) {
  const SocialListData = [
    {
      icon: logo_facebook,
      link: "#",
    },
    {
      icon: logo_twitter,
      link: "#",
    },
    {
      icon: logo_pinterest,
      link: "#",
    },
    {
      icon: logo_instagram,
      link: "#",
    },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__navigation">
          <NavMenu />
        </div>
        <div className="footer__company">
          <ul className="footer__social">
            {SocialListData.map((social, idx) => (
              <li key={idx} className="footer__icon">
                <a href="#">
                  <img src={social.icon} alt={social.link} />
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__copyright">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
