import "./socialLinks.scss";

import logo_facebook from "../../../assets/images/icon-facebook.svg";
import logo_twitter from "../../../assets/images/icon-twitter.svg";
import logo_pinterest from "../../../assets/images/icon-pinterest.svg";
import logo_instagram from "../../../assets/images/icon-instagram.svg";

import SocialIcon from "../../atoms/SocialIcon/SocialIcon";

export default function SocialLinks(props) {
  const SocialLinksData = [
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
    <>
      <ul className="social-links">
        {SocialLinksData.map((social, idx) => (
          <SocialIcon key={idx} link={social.link} img={social.icon} />
        ))}
      </ul>
    </>
  );
}
