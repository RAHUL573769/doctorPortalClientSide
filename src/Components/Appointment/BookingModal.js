import React from "react";

import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Booking For:{name}</h3>

          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
          <p className="py-4">{slots}</p>
          <div className="modal-action">
            <label for="booking-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
