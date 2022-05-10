import React from "react";
import Infocad from "./Infocad";

import clock from "../../Images/assets/icons/clock.svg";
import image2 from "../../Images/assets/icons/marker.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Infocad cardTitle="Opening Hours" img={clock}></Infocad>
      <Infocad cardTitle="Our Location" img={image2}></Infocad>
      <Infocad cardTitle="Contact Us" img={clock}></Infocad>
    </div>
  );
};

export default Info;
