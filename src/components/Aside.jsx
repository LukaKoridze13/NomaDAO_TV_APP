import React, { useContext } from "react";
import Logo from "../assets/images/logo.png";
import { styled } from "styled-components";
import AsideElement from "./AsideElement";
import useMoveSound from "../hooks/useMoveSound";
import { useNavigate } from "react-router-dom";
import useConditionalHandler from "../hooks/useConditionalHandler";
import AsideContext from "../context/AsideContext";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
export default function Aside() {
  // Context
  const asideContext = useContext(AsideContext);
  // prettier-ignore
  const { asideActive, setAsideActive, pages, activePage, setActivePage} = asideContext;
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();
  const removeSpaces = useRemoveSpaces;
  // adding listeners
  useConditionalHandler(asideEvents, asideActive);
  // event handlers
  function asideEvents(event) {
    switch (event.keyCode) {
      // Arrow Down
      case 40:
        nextPage();
        moveSound();
        break;
      // Arrow Up
      case 38:
        prevPage();
        moveSound();
        break;
      // Enter
      case 13:
        openPage();
        moveSound();
        break;
      // Right
      case 39:
        openPage();
        moveSound();
        break;
      default:
        break;
    }
  }
  // movement functions
  function openPage() {
    setAsideActive(false);
  }
  function prevPage() {
    if (activePage === 0) {
      setActivePage(pages.length - 1);
      navigate(`/${removeSpaces(pages[pages.length - 1])}`);
    } else {
      setActivePage(activePage - 1);
      navigate(`/${removeSpaces(pages[activePage - 1])}`);
    }
  }
  function nextPage() {
    if (activePage === pages.length - 1) {
      setActivePage(0);
      navigate(`/${removeSpaces(pages[0])}`);
    } else {
      setActivePage(activePage + 1);
      navigate(`/${removeSpaces(pages[activePage + 1])}`);
    }
  }

  return (
    <StyledAside>
      <Img src={Logo} alt="Logo" />
      <nav>
        <ul>
          {pages.map((page, index) => {
            return (
              <AsideElement
                key={page}
                name={page}
                active={index === activePage ? "true" : "false"}
                // prettier-ignore
                saved={Boolean((index === activePage) && !asideActive) ? "true" : "false"} // when user leaves aside navigation, page will be saved in UI
              />
            );
          })}
        </ul>
      </nav>
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  width: 25vw;
  height: 100%;
  background: rgba(52, 172, 243, 0.5);
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.25);
  overflow: auto;
  position: relative;
  z-index: 100;
`;

const Img = styled.img`
  width: 70%;
  display: block;
  margin: 9% auto;
  margin-bottom: 50px;
`;
