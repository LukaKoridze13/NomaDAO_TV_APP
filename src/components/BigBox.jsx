import React from "react";
import { styled } from "styled-components";

export default function BigBox(props) {
  const { img, title, description, active } = props;

  return (
    <Box>
      <Img src={img} active={active} />
      <Title active={active}>
        {title + " \u2022 "} <Span>{description}</Span>
      </Title>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 8px;
  ${(props) =>
    props.active === "true" &&
    "box-shadow: 0px 0px 14px 8px #bebebe; border: 2px solid #ececec;"};
`;

const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ececec;
  margin-top: 25px;
  ${(props) =>
    props.active === "true" &&
    "border-left: 4px solid white;padding-left: 8px;background: linear-gradient(90.01deg, rgba(44, 136, 192, 0.5) 1.17%,rgba(23, 83, 91, 0) 100.67%);"};
`;

const Span = styled.span`
  font-weight: 300;
  font-size: 16px;
`;
