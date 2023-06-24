import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProductContext from "../context/ProductContext";
import useKeyHandlerEffect from "../hooks/useKeyHanderEffect";
import useMoveSound from "../hooks/useMoveSound";

export default function Streaming() {
  const { link } = useParams();
  const navigate = useNavigate();
  const moveSound = useMoveSound;
  const productContext = useContext(ProductContext);
  const { product } = productContext; // lastly visited product, navigate(-1) doesn't work for TV

  useKeyHandlerEffect(streamingEvents);

  function streamingEvents(event) {
    switch (event.keyCode) {
      case 8:
        exit();
        moveSound();
        break;
      case 10009:
        exit();
        moveSound();
        break;
      default:
        break;
    }
  }

  function exit() {
    navigate(`/products/` + product);
  }

  return <Stream src={link}></Stream>;
}

const Stream = styled.iframe`
  width: 100%;
  height: 100%;
`;
