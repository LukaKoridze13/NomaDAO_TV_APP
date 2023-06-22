import React, { useContext, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { styled } from "styled-components";
import AsideElement from "./AsideElement";
import useMoveSound from "../hooks/useMoveSound";
import { useNavigate } from "react-router-dom";
import EventsContext from "../context/EventsContext";

export default function Aside() {
  const eventsContext = useContext(EventsContext);

  const {
    asideNavigation,
    setAsideNavigation,
    setPageContentNavigation,
    pages,
    setPages,
  } = eventsContext;

  const moveSound = useMoveSound;
  const navigate = useNavigate();

  function asideEvents(event) {
    switch (event.keyCode) {
      case 40:
        nextPage();
        break;
      case 38:
        prevPage();
        break;
      case 13:
        leaveAside();
        break;
      case 39:
        leaveAside();
        break;
      default:
        break;
    }
  }

  function nextPage() {
    let currentActivePage = pages.find((page) => page.active);
    let indexOfActivePage = pages.indexOf(currentActivePage);
    currentActivePage.active = false;
    if (indexOfActivePage === pages.length - 1) {
      pages[0].active = true;
    } else {
      pages[indexOfActivePage + 1].active = true;
    }
    setPages([...pages]);
  }

  function prevPage() {
    let currentActivePage = pages.find((page) => page.active);
    let indexOfActivePage = pages.indexOf(currentActivePage);
    currentActivePage.active = false;
    if (indexOfActivePage === 0) {
      pages[pages.length - 1].active = true;
    } else {
      pages[indexOfActivePage - 1].active = true;
    }
    setPages([...pages]);
  }

  function leaveAside() {
    setAsideNavigation(false);
    setPageContentNavigation(true);
    moveSound();
  }

  useEffect(() => {
    asideNavigation && document.addEventListener("keyup", asideEvents);
    return () => {
      document.removeEventListener("keyup", asideEvents);
    };
  }, [asideNavigation]);

  useEffect(() => {
    moveSound();
    let currentActivePage = pages.find((page) => page.active);
    navigate(`/${currentActivePage.name.replace(/\s/g, "")}`);
  }, [pages]);
  
  return (
    <AsideE>
      <Img src={Logo} alt="Logo" />
      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <AsideElement
                key={page.name}
                name={page.name}
                active={page.active.toString()}
                icon={page.icon}
              />
            );
          })}
        </ul>
      </nav>
    </AsideE>
  );
}

const AsideE = styled.aside`
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
