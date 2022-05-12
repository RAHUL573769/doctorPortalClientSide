import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);

  const [treatment, srtTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-center text-xl text-primary">
        Appointments Available on : {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service
            key={service._id}
            srtTreatment={srtTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal date={date} treatment={treatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
