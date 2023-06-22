import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();
  console.log("Error Page Opened");
  useEffect(() => {
    navigate("/Home");
  }, []);
  return <div>Error Page</div>;
}
