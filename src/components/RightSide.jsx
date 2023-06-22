import React, { useContext } from "react";
import { styled } from "styled-components";
import SearchIcon from "../assets/images/search.png";
import MicrophoneIcon from "../assets/images/microphone.png";
import { Outlet } from "react-router-dom";
import EventsContext from "../context/EventsContext";
export default function RightSide() {
  const context = useContext(EventsContext);
  let isBooking = context.pages.find((page) => page.name === "Book Your Hotel").active
  return (
    <Right>
      <Header>
        {!isBooking && (
          <SearchBox>
            <SearchInput placeholder="Search Nomadao products" />
            <VoiceSearch>
              <img src={MicrophoneIcon} alt="Mic" />
              <span>Type or voice</span>
            </VoiceSearch>
          </SearchBox>
        )}
        <ButtonsBox style={{marginLeft: isBooking && "auto"}}>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </ButtonsBox>
      </Header>
      <Outlet />
    </Right>
  );
}

const Right = styled.div`
  width: 75vw;
  height: 100%;
  padding: 0px 60px 0px 40px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0px;

  position: relative;
  z-index: 2;
`;


const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 496px;
  height: 40px;
  background: rgba(34, 121, 179, 0.5);
  backdrop-filter: blur(9.5px);
  border-radius: 32px;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  padding-left: 70px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 30px center;
  height: 20px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #d8d8d8;
  border-right: 1px solid white;
  &:focus {
    outline: none;
  }
  &::placeholder {
    outline: none;
    color: #d8d8d8bf;
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
  color: #d8d8d8bf;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
`;
const Button = styled.button`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ececec;
  border: none;
  background-color: transparent;
  &:first-child {
    padding-right: 30px;
    margin-right: 30px;
    border-right: 2px solid #ececec;
    margin-right: 10px;
  }
`;
const VoiceSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
  color: #d8d8d8bf;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
`;
