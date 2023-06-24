import React from "react";
import { styled } from "styled-components";
export default function Banner(props) {
  const { title, active, img } = props;

  return (
    <Box image={img} active={active}>
      <Title active={active}>{title}</Title>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 285px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  margin-bottom: 30px;
  background-image: url(${(props) => props.image});
  ${(props) =>
    props.active === "true" &&
    "box-shadow: 0px 0px 14px 8px #bebebe;border: 2px solid #ececec;"};
`;

const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ececec;

  position: absolute;
  bottom: 20px;
  left: 20px;

  ${(props) =>
    props.active === "true" &&
    "color: #14aafe;border-left: 4px solid #14aafe; padding-left: 8px;"};
`;
