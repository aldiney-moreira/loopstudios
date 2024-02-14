import "./ourCreations.scss";
import CardList from "../../molecules/CardList/CardList";

export default function OurCreations(props) {
  return (
    <section className="our-creations container">
      <h2 className="our-creations__title text--h2 text--black">
        Our creations
      </h2>
      <CardList />
      <button className="our-creations__button text--button text--black">
        See all
      </button>
    </section>
  );
}
