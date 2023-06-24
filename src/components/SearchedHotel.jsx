import React from "react";
import { styled } from "styled-components";

export default function SearchedHotel(props) {
  const { mainImage, name, rating, facilities, location, price, activeBox } =
    props;
  return (
    <Box active={activeBox} key={name}>
      <Img src={mainImage} />
      <Info>
        <Name>{name}</Name>
        <Rating>{rating} / 5</Rating>
        <FacilitiesWrapper>
          <p>Facilities:</p>
          <Facilities>
            {facilities.map((facility) => (
              <Facility key={name + facility}>{facility}</Facility>
            ))}
          </Facilities>
        </FacilitiesWrapper>
        <Location>Location: {location}</Location>
        <PriceWrapper>
          <p>from</p>
          <Price>${price} / night</Price>
        </PriceWrapper>
      </Info>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 250px;
  min-height: 250px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #01739f;

  display: flex;

  &:nth-child(${(props) => props.active}) {
    background-color: #01729f39;
  }
`;

const Img = styled.img`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 30%;
  height: 100%;
`;

const Info = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

const Name = styled.p`
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  line-height: 29px;
  color: #000000;

  position: absolute;
  top: 20px;
  left: 20px;
`;

const Rating = styled.div`
  width: fit-content;
  padding: 8px 16px;
  background: #01739f;
  border-radius: 4px;

  display: grid;
  place-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #ececec;

  position: absolute;
  top: 20px;
  right: 20px;
`;

const Facility = styled.div`
  padding: 5px 10px;
  background: #709bac;
  border-radius: 13.2191px;
  display: grid;
  place-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 12px;
  color: #ececec;
`;

const Facilities = styled.div`
  width: fit-content;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FacilitiesWrapper = styled.div`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #3f3f3f;

  align-items: flex-start;
  gap: 30px;

  position: absolute;
  top: 80px;
  left: 20px;
`;

const Location = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 14px;
  color: #3f3f3f;

  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const PriceWrapper = styled.div`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #3f3f3f;

  align-items: flex-end;
  gap: 6px;

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Price = styled.div`
  width: fit-content;
  padding: 8px 16px;
  background: #01739f;
  border-radius: 4px;

  display: grid;
  place-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #ececec;
`;
