import "./cardlist.scss";

import image_deepearth_mobile from "../../../assets/images/mobile/image-deep-earth.jpg";
import image_deepearth_desktop from "../../../assets/images/desktop/image-deep-earth.jpg";

import image_nightarcade_mobile from "../../../assets/images/mobile/image-night-arcade.jpg";
import image_nightarcade_desktop from "../../../assets/images/desktop/image-night-arcade.jpg";

import image_soccerteam_mobile from "../../../assets/images/mobile/image-soccer-team.jpg";
import image_soccerteam_desktop from "../../../assets/images/desktop/image-soccer-team.jpg";

import image_grid_mobile from "../../../assets/images/mobile/image-grid.jpg";
import image_grid_desktop from "../../../assets/images/desktop/image-grid.jpg";

import image_fromabove_mobile from "../../../assets/images/mobile/image-from-above.jpg";
import image_fromabove_desktop from "../../../assets/images/desktop/image-from-above.jpg";

import image__pocketborealis_mobile from "../../../assets/images/mobile/image-pocket-borealis.jpg";
import image__pocketborealis_desktop from "../../../assets/images/desktop/image-pocket-borealis.jpg";

import image__curiosity_mobile from "../../../assets/images/mobile/image-curiosity.jpg";
import image__curiosity_desktop from "../../../assets/images/desktop/image-curiosity.jpg";

import image__fisheye_mobile from "../../../assets/images/mobile/image-fisheye.jpg";
import image__fisheye_desktop from "../../../assets/images/desktop/image-fisheye.jpg";
import CardItem from "../CardItem/CardItem";

export default function CardList(props) {
  const CardListData = [
    {
      text: "Deep earth",
      background: {
        mobile: image_deepearth_mobile,
        desktop: image_deepearth_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Night arcade",
      background: {
        mobile: image_nightarcade_mobile,
        desktop: image_nightarcade_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Soccer team VR",
      background: {
        mobile: image_soccerteam_mobile,
        desktop: image_soccerteam_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "The grid",
      background: {
        mobile: image_grid_mobile,
        desktop: image_grid_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "From up above VR",
      background: {
        mobile: image_fromabove_mobile,
        desktop: image_fromabove_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Pocket borealis",
      background: {
        mobile: image__pocketborealis_mobile,
        desktop: image__pocketborealis_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "The curiosity",
      background: {
        mobile: image__curiosity_mobile,
        desktop: image__curiosity_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Make it fisheye",
      background: {
        mobile: image__fisheye_mobile,
        desktop: image__fisheye_desktop,
        position: "",
      },
      link: "#",
    },
  ];

  return (
    <div className="card-list">
      {CardListData.map((item, idx) => (
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
