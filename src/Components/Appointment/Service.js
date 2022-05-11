import React from "react";
import Services from "../Home/Services";

const Service = ({ service }) => {
  const { name, slots } = service;

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span>No Slots Available.Try Another Day</span>
            )}
          </p>
          <p>
            {slots.length}
            {slots.length > 1 ? "spaces" : "space"}{" "}
          </p>
          <p>{slots}</p>
          <div class="card-actions justify-end">
            <button disabled={slots.length === 0} class="btn btn-secondary ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
