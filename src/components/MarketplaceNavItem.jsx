import React from "react";
import { styled } from "styled-components";
import useDynamicImage from "../hooks/useDynamicImage";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
export default function MarketplaceNavItem({ name, active, click }) {
  const removeSpaces = useRemoveSpaces;
  const image = useDynamicImage(
    removeSpaces(active === "true" ? name + active : name),
    "svg"
  ); // render nametrue.svg if element is active, new svg will be white
  return (
    <Nav active={active} onClick={()=>{click(name)}}>
      <Img src={image} alt={name} />
      <Text active={active}>{name}</Text>
    </Nav>
  );
}

const Nav = styled.div`
  width: 246px;
  height: 40px;
  padding: 8px 16px;

  display: flex;
  align-content: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => {
      return props.active !== "true" && "#A0E2FC";
    }};
  }

  margin-top: 24px;

  &:first-child {
    margin-top: 0px;
  }

  background-color: ${(props) => {
    return props.active === "true" ? "#0699D2" : "transparent";
  }};
`;

const Img = styled.img`
  width: 24px;
`;

const Text = styled.p`
  font-size: 16px;
  font-family: "Inter";
  line-height: 24px;
  margin-left: 12px;
  color: ${(props) => {
    return props.active === "true" ? "white" : "var(--gray-800, #3f3f3f)";
  }};
`;
