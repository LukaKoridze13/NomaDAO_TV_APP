import React, { useState } from "react";
import { styled } from "styled-components";
import marketplace from "../assets/images/marketplace_logo.png";
import MarketplaceNavItem from "./MarketplaceNavItem";
import { Outlet, useNavigate } from "react-router-dom";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
export default function MarketplaceAgency() {
  const navigate = useNavigate();
  const removeSpaces = useRemoveSpaces
  
  const navigation = ["Dashboard", "Active Balance"];
  const [currentPage, setCurrentPage] = useState("Dashboard");

  function handleClick(string) {
    setCurrentPage(string); // change current page
    navigate('/marketplace/agency/'+removeSpaces(string)); // Navigate to the corresponding page
  }
  return (
    <Wrapper>
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
      </Aside>
      <Outlet />
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
  width: 20%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 64px 28px;
`;

const Logo = styled.img`
  margin-left: 28px;
`;

const Navigaion = styled.nav`
  margin-top: 120px;
`;
