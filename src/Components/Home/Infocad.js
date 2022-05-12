import React from "react";

const Infocad = ({ img, cardTitle }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl bg-accent px-12">
        <figure>
          <img src={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Infocad;
