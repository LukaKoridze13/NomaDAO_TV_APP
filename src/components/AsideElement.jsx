import React from "react";
import { styled } from "styled-components";
export default function AsideElement(props) {
  const { name, active, icon } = props;

  return (
    <Li>
      <White active={active}></White>
      <Content active={active}>
        <Img src={icon} alt={name} />
        <Span>{name}</Span>
      </Content>
    </Li>
  );
}

const White = styled.div`
  ${(props) =>
    props.active === "true" &&
    "width: 18px;height: 45px;background: #ececec;box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);position: absolute;left: 0px;top: 50%;transform: translateY(-50%);z-index: 1;"};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  padding-left: 34px;
  margin-bottom: 40px;
  margin-left: 8px;
  ${(props) =>
    props.active === "true" &&
    "background:rgb(17, 94, 145, 0.4);backdrop-filter: blur(9.5px);position: relative;z-index: 2;background: rgb(17, 94, 145, 0.4);border-width: 1px;border-style: solid;border-image: linear-gradient(to right,rgba(255, 255, 255, 1),rgba(0, 0, 0,0))1;"};
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
  ${(props) => props.active === "true" && "font-weight:500; color:#ececec"};
`;

const Li = styled.li`
  position: relative;
`;
