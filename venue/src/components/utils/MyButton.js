import React from "react";
import { Button } from "@mui/material";
import TicketIcon from "../../images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : "large"}
      style={{
        background: "#8e8e8e",
        color: "#fff",
        ...props.style,
      }}
    >
      {props.iconTicket ? (
        <img src={TicketIcon} alt="Icon" className="iconImage" />
      ) : null}

      {props.text}
    </Button>
  );
};

export default MyButton;
