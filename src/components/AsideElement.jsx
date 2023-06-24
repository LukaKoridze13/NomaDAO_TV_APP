import React from "react";
import { styled } from "styled-components";
import useDynamicImage from "../hooks/useDynamicImage";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
export default function AsideElement(props) {
  const { name, active, saved } = props;
  // hooks
  const removeSpaces = useRemoveSpaces;

  const image = useDynamicImage(removeSpaces(name)); // load image dynamically. Image name should be pagename.png, always!!!, for example Nomad Enternainment image is NomadEntertainment.png, with removed whitespaces

  return (
    <Li>
      <White active={active}></White>
      <Content active={active} saved={saved}>
        <Img src={image} alt={name} />
        <Span>{name}</Span>
      </Content>
    </Li>
  );
}

const White = styled.div`
  width: 10px;
  height: 45px;
  background: #ececec;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: ${(props) => (props.active === "true" ? "block" : "none")};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 56px;
  padding-left: 34px;
  margin-bottom: 40px;
  margin-left: 8px;

  position: relative;
  z-index: 2;
  border-width: 2px;
  transition: all 0s;
  // prettier-ignore
  border-image: linear-gradient(to right,rgba(255, 255, 255, 1),rgba(0, 0, 0,0))1;
  background: ${(props) => props.active === "true" && "rgb(17, 94, 145)"};
  border-style: ${(props) => (props.active === "true" ? "solid" : "none")};
  background: ${(props) => props.saved === "true" && "rgba(17, 94, 145, 0.35)"};
`;

const Img = styled.img`
  margin-right: 10px;
  width: 20px;
`;

const Span = styled.span`
  margin-left: 10px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  color: #d5fbff;
`;

const Li = styled.li`
  position: relative;
`;
