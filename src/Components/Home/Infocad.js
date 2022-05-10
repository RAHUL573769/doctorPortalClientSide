import React from "react";

const Infocad = ({ img, cardTitle }) => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl bg-accent px-12">
        <figure>
          <img src={img} />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Infocad;
