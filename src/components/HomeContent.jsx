import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Banner from "./Banner";
import SmallBox from "./SmallBox";
import useMoveSound from "../hooks/useMoveSound";
import pagesContent from "../data/pagesContent";
import AsideContext from "../context/AsideContext";
import useConditionalHandler from "../hooks/useConditionalHandler";
export default function PageContent() {
  // state
  const pageData = pagesContent.Home;
  const [bannerActive, setBannerActive] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  // context
  const asideContext = useContext(AsideContext);
  // prettier-ignore
  const { asideActive, setAsideActive} = asideContext;
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();

  // detect if user moved on this page, and activate banner
  useEffect(() => {
    !asideActive && setBannerActive(true);
  }, [asideActive]);

  // adding events
  useConditionalHandler(bannerNav, bannerActive);
  useConditionalHandler(boxesNav, activeBox !== false); //  !==false because when it's 0, it's still returned as false

  // event handers
  function bannerNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        setActiveBox(0);
        setBannerActive(false);
        moveSound();
        break;

      // Up Arrow
      case 38:
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
        openSinlgePage(pageData.banner.title);
        moveSound();
        break;

      default:
        break;
    }
  }
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
        leftBox();
        moveSound();
        break;

      // Right Arrow
      case 39:
        rightBox();
        moveSound();
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
        openSinlgePage(pageData.boxes[activeBox].title);
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
    setBannerActive(false);
  }
  function downBox() {
    if (pageData.boxes[activeBox + 3]) {
      setActiveBox(activeBox + 3); // check if box down presents, +3 because 3 boxes present each line
    } else {
      setActiveBox(false);
      setBannerActive(true); // id down is no box, go to banner
    }
  }
  function upBox() {
    if (pageData.boxes[activeBox - 3]) {
      setActiveBox(activeBox - 3); // check if box down presents, +3 because 3 boxes present each line
    } else {
      setActiveBox(false);
      setBannerActive(true); // id down is no box, go to banner
    }
  }
  function leftBox() {
    if (activeBox % 3 === 0) {
      returnToAside(); // check if box is the left one, go to aside
    } else {
      setActiveBox(activeBox - 1);
    }
  }
  function rightBox() {
    if (activeBox === pageData.boxes.length - 1) {
      setActiveBox(false);
      setBannerActive(true); // jump to banner because it's last box
    } else {
      setActiveBox(activeBox + 1);
    }
  }
  return (
    <Wrapper>
      {/* prettier-ignore */}
      <Banner title={pageData.banner.title} img={pageData.banner.img} active={bannerActive ? 'true' : 'false'}/>
      {
        // prettier-ignore
        pageData.boxes.map((box, index) => <SmallBox title={box.title} img={box.img} key={box.title + "SMALL"} active={activeBox === index ? "true" : "false" }/>)
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  row-gap: 20px;
  padding: 0px 60px 0px 40px;
`;
