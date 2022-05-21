import React from "react";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Discounts = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>Off</span>
          </div>
        </Fade>
        <Slide direction="right">
          <div className="discount_description">
            <h3>Purchase before 20th June</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              provident, quod minus corporis natus ducimus laudantium, maiores
              illo quo et id! Ex, quia aut provident harum aspernatur maiores!
              Maxime, ea!
            </p>
            <MyButton
              text="Purchase Ticket"
              link="/"
              size="small"
              style={{
                background: "#ffa800",
                color: "#fff",
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discounts;
