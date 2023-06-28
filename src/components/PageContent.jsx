import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BigBox from "./BigBox";
import useMoveSound from "../hooks/useMoveSound";
import pagesContent from "../data/pagesContent";
import AsideContext from "../context/AsideContext";
import useConditionalHandler from "../hooks/useConditionalHandler";
import { styled } from "styled-components";
export default function PageContent() {
  let { pagename } = useParams(); // getting the name of the page
  // state
  const [pageData, setPageData] = useState(pagesContent[pagename]);
  const [activeBox, setActiveBox] = useState(false);
  // context
  const asideContext = useContext(AsideContext);
  // prettier-ignore
  const { asideActive, setAsideActive} = asideContext;
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();
  useEffect(() => {
    setPageData(pagesContent[pagename]);
  }, [pagename]);
  // detect if user moved on this page, and activate banner
  useEffect(() => {
    !asideActive && setActiveBox(0);
  }, [asideActive]);
  // adding events
  useConditionalHandler(boxesNav, activeBox !== false); //  !==false because when it's 0, it's still returned as false
  // event handers
  function boxesNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        downBox();
        moveSound();
        break;

      // Up Arrow
      case 38:
        upBox();
        moveSound();
        break;

      // Left Arrow
      case 37:
        returnToAside();
        moveSound();
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        returnToAside();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        returnToAside();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        openSinlgePage(pageData[activeBox].title);
        moveSound();
        break;

      default:
        break;
    }
  }
  // functions
  function openSinlgePage(name) {
    navigate("/products/" + name);
  }
  function returnToAside() {
    setAsideActive(true);
    setActiveBox(false);
  }
  function downBox() {
    if (activeBox === pageData.length - 1) {
      setActiveBox(0);
    } else {
      setActiveBox(activeBox + 1);
    }
  }
  function upBox() {
    if (activeBox === 0) {
      setActiveBox(pageData.length - 1);
    } else {
      setActiveBox(activeBox - 1);
    }
  }
  return (
    <Wrapper>
      {pageData.map((box, index) => {
        const { title, img, description } = box;
        // prettier-ignore
        return <BigBox key={title + "BigBox"} title={title} img={img} description={description} active={activeBox === index ? 'true' : 'false'} />
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 60px 0px 40px;
`;
