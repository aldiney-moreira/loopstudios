import React from "react";
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

export default function CardList(props) {
  const CardListData = [
    {
      text: "Deep <br /> earth",
      background: {
        mobile: image_deepearth_mobile,
        desktop: image_deepearth_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Night <br /> arcade",
      background: {
        mobile: image_nightarcade_mobile,
        desktop: image_nightarcade_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Soccer <br /> team VR",
      background: {
        mobile: image_soccerteam_mobile,
        desktop: image_soccerteam_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "The <br /> grid",
      background: {
        mobile: image_grid_mobile,
        desktop: image_grid_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "From up <br /> above VR",
      background: {
        mobile: image_fromabove_mobile,
        desktop: image_fromabove_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Pocket <br /> borealis",
      background: {
        mobile: image__pocketborealis_mobile,
        desktop: image__pocketborealis_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "The <br /> curiosity",
      background: {
        mobile: image__curiosity_mobile,
        desktop: image__curiosity_desktop,
        position: "",
      },
      link: "#",
    },
    {
      text: "Make it <br /> fisheye",
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
        <a key={idx} className="card-list__item">
          <picture className="card-list__image">
            <source
              srcSet={item.background.mobile}
              media="(max-width: 768px)"
            />
            <img src={item.background.desktop} />
          </picture>
          <p className="card-list__title text--h3">
            {item.text.split("<br />").map((text, idx) => (
              <React.Fragment key={idx}>
                {text}
                {idx !== item.text.split("<br />").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </a>
      ))}
    </div>
  );
}
