import React, { useState } from "react";
import Services from "../Home/Services";
import BookingModal from "./BookingModal";

const Service = ({ service, srtTreatment }) => {
  const { name, slots } = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
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
          <div className="card-actions justify-end">
            <label
              for="booking-modal"
              className="btn modal-button "
              onClick={() => srtTreatment(service)}
              disabled={slots.length === 0}
            >
              open modal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
