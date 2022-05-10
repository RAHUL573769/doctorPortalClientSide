import React from "react";
import Infocad from "./Infocad";

import clock from "../../Images/assets/icons/clock.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Infocad img={clock}></Infocad>
      <Infocad img={clock}></Infocad>
      <Infocad img={clock}></Infocad>
    </div>
  );
};

export default Info;
