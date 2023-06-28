import React, { useState } from "react";
import { styled } from "styled-components";
import MarketplaceLogin from "./MarketplaceLogin";
import MarketplaceRegister from "./MarketplaceRegister";
export default function AuthMarketplace() {
  const [type, setType] = useState("login"); // form should be login or registraton

  // prettier-ignore
  function handleSwitch(){
    if(type === 'login'){
      setType('register')
    }else{
      setType('login')
    }
  }
  return (
    <Wrapper>
      {/* prettier-ignore */}
      <Flex>
        <Text>Login</Text>
        <CheckBoxWrapper>
          <CheckBox id="type" type="checkbox" onChange={handleSwitch} />
          <CheckBoxLabel htmlFor="type" />
        </CheckBoxWrapper>
        <Text>Register</Text>
      </Flex>
      {type === "login" ? <MarketplaceLogin /> : <MarketplaceRegister />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: grid;
  place-content: center;
`;
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #14aafe;

  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  background: #14aafe;

  &:checked + ${CheckBoxLabel} {
    background: #14aafe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-inline: auto;
  width: fit-content;
`;
const Text = styled.span`
  color: #3f3f3f;
  font-size: 18px;
  font-family: "Inter";
  margin-inline: 15px;
`;


