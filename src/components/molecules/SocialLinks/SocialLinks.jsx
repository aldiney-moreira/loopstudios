import "./socialLinks.scss";
import logo_facebook from "/images/icon-facebook.svg";
import logo_twitter from "/images/icon-twitter.svg";
import logo_pinterest from "/images/icon-pinterest.svg";
import logo_instagram from "/images/icon-instagram.svg";
import SocialIcon from "../../atoms/SocialIcon/SocialIcon";

export default function SocialLinks(props) {
  const SocialLinksData = [
    {
      name: "facebook",
      icon: logo_facebook,
      link: "#",
    },
    {
      name: "twitter",
      icon: logo_twitter,
      link: "#",
    },
    {
      name: "pinterest",
      icon: logo_pinterest,
      link: "#",
    },
    {
      name: "instagram",
      icon: logo_instagram,
      link: "#",
    },
  ];

  return (
    <ul className="social-links">
      {SocialLinksData.map((social, idx) => (
        <SocialIcon
          width="24"
          height="20"
          key={idx}
          link={social.link}
          img={social.icon}
          alt={social.name}
        />
      ))}
    </ul>
  );
}
