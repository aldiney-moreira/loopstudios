import "./carditem.scss";

export default function CardItem({ background, text, link }) {
  const [background_mobile, background_desktop] = background;
  return (
    <a className="card-list__item" href={link}>
      <picture className="card-list__image">
        <source srcSet={background_mobile} media="(max-width: 768px)" />
        <img src={background_desktop} />
      </picture>
      <p className="card-list__title text--h3">{text}</p>
    </a>
  );
}
