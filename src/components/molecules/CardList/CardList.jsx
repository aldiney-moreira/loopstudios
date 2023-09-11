import "./cardList.scss";
import cards from "../../../database/cards.json";

import CardItem from "../CardItem/CardItem";

export default function CardList(props) {
  return (
    <div className="card-list">
      {cards.map((item, idx) => (
        <CardItem
          background={[item.background.mobile, item.background.desktop]}
          text={item.text}
          link={item.link}
          key={idx}
        />
      ))}
    </div>
  );
}
