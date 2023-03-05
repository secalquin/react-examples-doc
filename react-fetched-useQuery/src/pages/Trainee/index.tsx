import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Trainee = () => {
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log("location", location);
    if (!location.state) {
      navigate("/");
    }
  }, [location]);

  return <div>Valor de title: {JSON.stringify(location)}</div>;
};

export default Trainee;
