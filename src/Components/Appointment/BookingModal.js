import React from "react";

import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Booking For:{name}</h3>

          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input w-full max-w-xs"
            />
            <select class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
          <p class="py-4">{slots}</p>
          <div class="modal-action">
            <label for="booking-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
