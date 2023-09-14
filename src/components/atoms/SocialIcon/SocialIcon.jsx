import "./socialIcon.scss";

export default function SocialIcon({ link, img, alt }) {
  return (
    <li className="social-icon">
      <a href={link} aria-label={`Visit us on ${alt}`}>
        <img width="36" height="36" src={img} alt="" />
      </a>
    </li>
  );
}
