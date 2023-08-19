import "./socialIcon.scss";

export default function SocialIcon({ link, img }) {
  return (
    <li className="social-icon">
      <a href={link}>
        <img src={img} alt="" />
      </a>
    </li>
  );
}
