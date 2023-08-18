import "./footer.scss";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__navigation">
          <NavMenu />
        </div>
        <div className="footer__company">
          <SocialLinks />
          <p className="footer__copyright text--copyright">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
