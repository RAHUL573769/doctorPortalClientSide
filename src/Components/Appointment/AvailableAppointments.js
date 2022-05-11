import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ date, setDate }) => {
  return (
    <div>
      <p className="text-center text-xl text-primary">
        Appointments Available on : {format(date, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
