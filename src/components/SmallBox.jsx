import React from "react";
import { styled } from "styled-components";

export default function SmallBox(props) {
  const { img, title, active } = props;

  return (
    <Box image={img} active={active}>
      <Title active={active}>{title}</Title>
    </Box>
  );
}

const Box = styled.div`
  height: 240px;
  width: 30%;
  border-radius: 8px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: ${(props) => `url(${props.image})`};
  ${(props) =>
    props.active === "true" &&
    "box-shadow: 0px 0px 14px 8px #bebebe;border: 2px solid #ececec;"};
`;

const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ececec;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  ${(props) =>
    props.active === "true" &&
    "color: #14aafe;border-left: 4px solid #14aafe; padding-left: 8px;"};
`;
