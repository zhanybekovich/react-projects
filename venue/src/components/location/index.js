import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Hello"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.8377641512062!2d74.60417053433352!3d42.87566289461765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7QviDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1653144461080!5m2!1sru!2skg"
        width="100%"
        height="500px"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
