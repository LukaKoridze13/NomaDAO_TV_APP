import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/Home");
  }, [navigate]);
  return <div>Error Page</div>;
}
