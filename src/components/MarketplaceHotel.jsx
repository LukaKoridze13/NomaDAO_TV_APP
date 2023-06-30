import React, { useState } from "react";
import { styled } from "styled-components";
import marketplace from "../assets/images/marketplace_logo.png";
import MarketplaceNavItem from "./MarketplaceNavItem";
import { Outlet, useNavigate } from "react-router-dom";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
import logout from "../assets/images/logout.svg";
import bell from "../assets/images/notification.svg";
import Popup from "./Popup";

export default function MarketplaceHotel() {
  const navigate = useNavigate();
  const removeSpaces = useRemoveSpaces;
  const [popup, setPopup] = useState(false);
  const navigation = [
    "Home",
    "Control Panel",
    "Group Requests",
    "Active Balance",
  ];
  const [currentPage, setCurrentPage] = useState("Home");

  function handleClick(string) {
    setCurrentPage(string); // change current page
    navigate("/marketplace/hotel/" + removeSpaces(string)); // Navigate to the corresponding page
  }
  return (
    <Wrapper>
      {popup && <Popup setPopup={setPopup} name="Tour Agency #2" />}
      <UserInfo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Organe />
          <div>
            <UserName>Karim Benzema</UserName>
            <UserTitle>Admin</UserTitle>
          </div>
        </div>
        <Img src={bell} alt="bell" />
      </UserInfo>
      <Aside>
        <Logo src={marketplace} alt="Marketplace Logo" />
        <Navigaion>
          {navigation.map((item) => (
            <MarketplaceNavItem
              click={handleClick}
              name={item}
              key={item}
              active={item === currentPage ? "true" : "false"}
            />
          ))}
        </Navigaion>
        <Logout
          onClick={() => {
            navigate("/Marketplace");
          }}
        >
          <img style={{ marginRight: "12px" }} src={logout} alt="Logout" />
          <span>Logout</span>
        </Logout>
      </Aside>
      <Outlet context={{setPopup}}/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;

  position: relative;

  display: flex;
`;

const Aside = styled.aside`
  width: 22%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 64px 28px;

  position: relative;
`;

const Logo = styled.img`
  margin-left: 28px;
`;

const Navigaion = styled.nav`
  margin-top: 120px;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);

  color: #a65959;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  cursor: pointer;
`;

const UserInfo = styled.div`
  position: absolute;
  top: 60px;
  right: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const UserName = styled.p`
  color: #4c4c4c;
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const UserTitle = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const Img = styled.img`
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 50%;
`;

const Organe = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fe7c31;
  margin-right: 10px;
  border-radius: 50%;
`;
