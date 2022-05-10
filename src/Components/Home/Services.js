import React from "react";
import floride from "../../Images/assets/images/fluoride.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Floride Treatment",
      description: "Nice",
      img: floride,
    },
    {
      _id: 2,
      name: "Floride Treatment",
      description: "Nice",
      img: floride,
    },
    {
      _id: 3,
      name: "Floride Treatment",
      description: "Nice",
      img: floride,
    },
  ];

  return (
    <div>
      <h2 className="text-center text-xl  font-bold uppercase ">
        Our Services
      </h2>
      <h2>Services We Provide</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
