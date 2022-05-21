import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quis veritatis nisi rem iste mollitia minus vel a debitis eaque, dicta temporibus voluptatibus cumque enim ipsam dolores possimus amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quis veritatis nisi rem iste mollitia minus vel a debitis eaque, dicta temporibus voluptatibus cumque enim ipsam dolores possimus amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quis veritatis nisi rem iste mollitia minus vel a debitis eaque, dicta temporibus voluptatibus cumque enim ipsam dolores possimus amet consectetur.",
    ],
    linkto: ["https://google.com", "https://fb.com", "https://instagram.com"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[i]}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{ color: "#fff" }}
              link={priceState.linkto[i]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
