import React from "react";
import { styled } from "styled-components";
import searchImg from "../assets/images/search_marketplace.svg";
export default function MarketplaceHeader() {
  return (
    <>
      <Header>
        {/* prettier-ignore */}
        <Search img={searchImg} type="search" placeholder="Search Hotels, agencies, fares and etc." />
      </Header>
    </>
  );
}

const Search = styled.input`
  width: 920px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background: #fafafa;
  padding-left: 50px;

  color: #4c4c4c;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 15px center;
`;

const Header = styled.header`
  
`;


