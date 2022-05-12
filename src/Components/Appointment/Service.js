import React, { useState } from "react";
import Services from "../Home/Services";
import BookingModal from "./BookingModal";

const Service = ({ service, srtTreatment }) => {
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
            <label
              for="booking-modal"
              class="btn modal-button "
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
