import "./about.scss";
import image_interactive_mobile from "/images/mobile/image-interactive.jpg";
import image_interactive_desktop from "/images/desktop/image-interactive.jpg";

export default function About(props) {
  return (
    <article className="about container">
      <div className="about__container">
        <picture className="about__image">
          <source
            width="654"
            height="448"
            srcSet={image_interactive_mobile}
            media="(min-width: 768px)"
            alt="Man using VR"
          />
          <img
            width="731"
            height="500"
            src={image_interactive_desktop}
            alt="Man using VR"
          />
        </picture>
        <div className="about__text">
          <h2 className="about__title text--h2 text--black">
            The leader in interactive VR
          </h2>
          <p className="about__description text--description text--dark-gray">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </article>
  );
}
