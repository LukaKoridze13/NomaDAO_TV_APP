import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Streaming() {
  const { link } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("keyup", streamingEvents);
    return () => {
      document.removeEventListener("keyup", streamingEvents);
    };
  }, []);

  function streamingEvents(event) {
    switch (event.keyCode) {
      case 8:
        exit();
        break;
      case 10009:
        exit();
        break;
      default:
        break;
    }
  }

  function exit() {
    console.log("exit from streaaming");
    navigate(-1);
  }

  return <Stream src={link}></Stream>;
}

const Stream = styled.iframe`
  width: 100%;
  height: 100%;
`;
