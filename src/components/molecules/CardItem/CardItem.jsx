import "./cardItem.scss";

export default function CardItem({ background, text, link }) {
  const [background_mobile, background_desktop] = background;
  return (
    <a className="card-list__item" href={link}>
      <picture className="card-list__image">
        <source
          width="654"
          height="240"
          srcSet={background_mobile}
          media="(max-width: 768px)"
        />
        <img
          width="256"
          height="450"
          src={background_desktop}
          alt={`Learn more about our "${text}".`}
        />
      </picture>
      <p className="card-list__title text--h3">{text}</p>
    </a>
  );
}
