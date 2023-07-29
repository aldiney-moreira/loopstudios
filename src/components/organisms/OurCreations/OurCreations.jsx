import "./ourcreations.scss";
import image_deepearth from "../../../assets/images/desktop/image-deep-earth.jpg";
import image_nightarcade from "../../../assets/images/desktop/image-night-arcade.jpg";
import image_soccerteam from "../../../assets/images/desktop/image-soccer-team.jpg";
import image_grid from "../../../assets/images/desktop/image-grid.jpg";
import image_fromabove from "../../../assets/images/desktop/image-from-above.jpg";
import image__pocketborealis from "../../../assets/images/desktop/image-pocket-borealis.jpg";
import image__curiosity from "../../../assets/images/desktop/image-curiosity.jpg";
import image__fisheye from "../../../assets/images/desktop/image-fisheye.jpg";

export default function OurCreations(props) {
  return (
    <section className="our-creations container">
      <h2 className="our-creations__title text--h2 text--black">Our creations</h2>
      <div className="card-list">
        <a className="card-list__item" style={{background: `url(${image_deepearth}) center/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">Deep <br /> earth</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image_nightarcade}) center/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">Night <br /> arcade</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image_soccerteam}) top/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">Soccer <br /> team VR</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image_grid}) center/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">The <br /> grid</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image_fromabove}) top/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">From up <br /> above VR</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image__pocketborealis}) center/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">Pocket <br /> borealis</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image__curiosity}) top/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">The <br /> curiosity</p>
          </div>
        </a>
        <a className="card-list__item" style={{background: `url(${image__fisheye}) center/cover`}}>
          <div className="card-list__background">
            <p className="card-list__title text--h3">Make it <br /> fisheye</p>
          </div>
        </a>
      </div>
      <button className="our-creations__button text--button text--black">See all</button>
    </section>
  );
}
