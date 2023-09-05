import "./socialIcon.scss";

export default function SocialIcon({ link, img }) {
  return (
    <li className="social-icon">
      <a href={link}>
        <img width="36" height="36" src={img} alt="" />
      </a>
    </li>
  );
}
