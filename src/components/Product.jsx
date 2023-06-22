import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../assets/images/logo.png";
import Arrow from "../assets/images/arrow-back.png";
import useMoveSound from "../hooks/useMoveSound";
import EventsContext from "../context/EventsContext";
import { useEncodeLink } from "../hooks/useEncodeLink";

export default function Product() {
  const { product } = useParams();

  const [active, setActive] = useState("launch");
  const navigate = useNavigate();
  const eventsContext = useContext(EventsContext);
  const encodeLink = useEncodeLink;
  const moveSound = useMoveSound;
  const { setPageContentNavigation, singlePages } = eventsContext;
  const [data, setData] = useState(
    singlePages.find((page) => page.title === product)
  );


  useEffect(() => {
    document.addEventListener("keyup", productNavigation);
    return () => {
      document.removeEventListener("keyup", productNavigation);
    };
  }, [product, active]);

  function productNavigation(event) {
    switch (event.keyCode) {
      case 13:
        if (active === "back") {
          exit();
        } else if (active === "launch") {
          navigate("/streaming/" + encodeLink(data.launch_link));
        } else if (active === "tutorial") {
          navigate("/streaming/" + encodeLink(data.tutorial_link));
        }
        break;
      case 38:
        if (active !== "back") {
          setActive("back");
          moveSound();
        }
        break;
      case 40:
        if (active === "back") {
          setActive("launch");
          moveSound();
        }
        break;
      case 39:
        if (active === "launch") {
          setActive("tutorial");
          moveSound();
        }
        break;
      case 37:
        if (active === "tutorial") {
          setActive("launch");
          moveSound();
        }
        break;
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
    setPageContentNavigation(true);
    navigate(-1);
    console.log("Exit from product page")
  }

  return (
    <SinglePage img={data.img}>
      <Top>
        <img src={Logo} alt="Logo" />
        <BackButton active={active}>
          <img style={{ marginRight: "16px" }} src={Arrow} alt="Arrow Left" />
          <p>Back</p>
        </BackButton>
      </Top>
      <Bottom>
        <Title>{data.title}</Title>
        <Buttons>
          <Launch active={active}>Launch</Launch>
          <Tutorial active={active}>Tutorial</Tutorial>
        </Buttons>
        <Description>{data.description}</Description>
      </Bottom>
    </SinglePage>
  );
}

const SinglePage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${(props) => {
    return `url(${props.img})`;
  }};
  background-repeat: no-repeat;
  background-size: 80vw 100vh;
`;

const Top = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 87px;
  left: 0px;
  top: 48px;
  background: rgba(54, 148, 202, 0.769);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
`;

const Bottom = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  background-color: rgb(32, 32, 32);
  box-shadow: -20px 0px 100px 150px rgb(32, 32, 32);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding-right: 50px;
`;

const BackButton = styled.button`
  background-color: rgba(0, 0, 0, 0.505);
  width: 251px;
  height: 40px;
  border: 1px solid #ffffff;
  backdrop-filter: blur(9.5px);
  border-radius: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.active === "back" &&
    "color: #ececec;background-color: rgba(20, 170, 254, 1);"}
`;

const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 36px;
`;

const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 45%;
  height: 40px;
  border: 1px solid #ececec;
  backdrop-filter: blur(9.5px);
  border-radius: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #ececec76;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Launch = styled(Button)`
  ${(props) =>
    props.active === "launch" &&
    "color: #ececec;background-color: rgba(20, 170, 254, 1);"}
`;
const Tutorial = styled(Button)`
  ${(props) =>
    props.active === "tutorial" &&
    "color: #ececec;background-color: rgba(20, 170, 254, 1);"}
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
