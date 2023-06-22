import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import BigBox from "./BigBox";
import Banner from "./Banner";
import SmallBox from "./SmallBox";
import EventsContext from "../context/EventsContext";
import useMoveSound from "../hooks/useMoveSound";

export default function PageContent() {
  let { pagename } = useParams();

  if (pagename === "index.html") {
    pagename = "Home";
  }

 

  const eventsContext = useContext(EventsContext);
  const navigate = useNavigate();
  const moveSound = useMoveSound;

  const {
    setAsideNavigation,
    pageContentNavigation,
    setPageContentNavigation,
    content,
  } = eventsContext;

  const [pageData, setPageData] = useState(content[pagename]);

  function contentNavigation(event) {
    if (pagename === "Home") {
      const activeIndex = pageData.indexOf(
        pageData.find((page) => page.active)
      );
      switch (event.keyCode) {
        case 40:
          if (activeIndex === 0) {
            nextBox();
          } else if (pageData[activeIndex + 3]) {
            downBox();
          }
          break;
        case 38:
          if (activeIndex === 0) {
            activateSearch();
          } else if (pageData[activeIndex - 3]) {
            upBox();
          } else if (activeIndex > 0 && activeIndex < 4) {
            goBox(0);
          }
          break;
        case 37:
          if (pageData[0].active) {
            leavePageEnterAside();
          } else if(activeIndex%3===1) {
            leavePageEnterAside();
          }else{
            prevBox();
          }
          break;
        case 39:
          nextBox();
          break;
        case 8:
          leavePageEnterAside();
          break;
        case 10009:
          leavePageEnterAside();
          break;
        default:
          break;
      }
    } else {
      switch (event.keyCode) {
        case 40:
          nextBox();
          break;
        case 38:
          prevBox();
          break;
        case 37:
          leavePageEnterAside();
          break;
        case 8:
          leavePageEnterAside();
          break;
        case 10009:
          leavePageEnterAside();
          break;
        default:
          break;
      }
    }
    if (event.keyCode === 13) {
      openProductPage();
    }
  }

  function openProductPage() {
    setPageContentNavigation(false);
    navigate(`/products/${pageData.find((prod) => prod.active).title}`);
  }
  function nextBox() {
    let currentActiveBox = pageData.find((box) => box.active);
    let indexOfActiveBox = pageData.indexOf(currentActiveBox);
    currentActiveBox.active = false;
    if (indexOfActiveBox === pageData.length - 1) {
      pageData[0].active = true;
    } else {
      pageData[indexOfActiveBox + 1].active = true;
    }
    pageData.length > 1 && moveSound();
    setPageData([...pageData]);
  }
  function prevBox() {
    let currentActiveBox = pageData.find((box) => box.active);
    let indexOfActiveBox = pageData.indexOf(currentActiveBox);
    currentActiveBox.active = false;
    if (indexOfActiveBox === 0 ) {
      pageData[pageData.length - 1].active = true;
    } else {
      pageData[indexOfActiveBox - 1].active = true;
    }
    pageData.length > 1 && moveSound();
    setPageData([...pageData]);
  }
  function downBox() {
    let currentActiveBox = pageData.find((box) => box.active);
    let indexOfActiveBox = pageData.indexOf(currentActiveBox);
    currentActiveBox.active = false;
    pageData[indexOfActiveBox + 3].active = true;
    moveSound();
    setPageData([...pageData]);
  }
  function upBox() {
    let currentActiveBox = pageData.find((box) => box.active);
    let indexOfActiveBox = pageData.indexOf(currentActiveBox);
    currentActiveBox.active = false;
    pageData[indexOfActiveBox - 3].active = true;
    moveSound();
    setPageData([...pageData]);
  }
  function goBox(index) {
    let currentActiveBox = pageData.find((box) => box.active);
    currentActiveBox.active = false;
    pageData[index].active = true;
    moveSound();
    setPageData([...pageData]);
  }
  function activateSearch() {
    console.log("activateSearch");
  }
  function leavePageEnterAside() {
    setAsideNavigation(true);
    setPageContentNavigation(false);
    pageData.forEach((data) => {
      data.active = false;
    });
    setPageData([...pageData]);
    moveSound();
  }

  useEffect(() => {
    pageContentNavigation &&
      document.addEventListener("keyup", contentNavigation);
    if (!pageData.find((page) => page.active) && pageContentNavigation) {
      pageData[0].active = true;
    }
    pageContentNavigation && setPageData([...pageData]);
    return () => {
      document.removeEventListener("keyup", contentNavigation);
    };
  }, [pageContentNavigation]);

  useEffect(() => {
    setPageData([...content[pagename]]);
  }, [pagename]);
  return (
    <Wrapper pagename={pagename}>
          {pagename === "Home" ? (
            <>
              {/* prettier-ignore */}
              <Banner title={pageData[0].title} img={pageData[0].img} active={ pageData[0].active !== undefined ? pageData[0].active.toString() : "false"}/>
              {pageData.map((smallBox, index) => {
                if (index > 0) {
                  return (
                    /* prettier-ignore */
                    <SmallBox title={smallBox.title} img={smallBox.img} key={smallBox.title + "SMALL" + index} active={ pageData[index].active !== undefined ? pageData[index].active.toString() : "false"}
                    />
                  );
                }
              })}
            </>)
            : (<>
            {pageData.map((box, index) => {
          const { title, img, description, active } = box;
          return (
            <BigBox
              key={title + "BigBox" + index}
              title={title}
              img={img}
              description={description}
              active={active !== undefined ? active.toString() : "false"}
            />
          );
            })}
            </>)

          }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: ${(props) => (props.pagename === "Home" ? "flex" : "block")};
  row-gap: ${(props) => (props.pagename === "Home" ? "40px" : "0px")};
  flex-wrap: wrap;
  justify-content: space-between;
`;
