import React from "react";
import { styled } from "styled-components";
import Green from "../assets/images/green_triangle.svg";
import Red from "../assets/images/red_triangle.svg";
import Avatar from "../assets/images/avatar.png";
export default function RelatedHotelFares() {
  const items = [];
  for (let index = 0; index < 13; index++) {
    items.push(
      <Item>
        <Img src={Avatar} />
        <Hotel>Hotel {Math.floor(Math.random() * 10)}</Hotel>
        <Price>{Math.floor(Math.random() * 100 + 200)} $</Price>
        <Price>Tbilisi</Price>
        <Img src={Math.random() > 0.5 ? Green : Red} />
      </Item>
    );
  }
  return (
    <Wrapper>
      <Title>Related Hotel Fares</Title>
      {items.map((item) => item)}
      <View>View All</View>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 300px;
  height: 800px;
  padding: 10px 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #f3f3f3;

  position: absolute;
  right: 50px;
  top: 200px;
`;

const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 8px 0px;
`;

const Img = styled.img``;
const Hotel = styled.p`
  color: #4c4c4c;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const Price = styled.p`
  color: #808080;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const View = styled.button`
  border-radius: 4px;
  background: var(--brand-b, #0699d2);

  color: var(--gray-100, #ececec);
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  border: none;
  padding: 8px 16px;
  margin-top: 20px;
  cursor: pointer;
`;
