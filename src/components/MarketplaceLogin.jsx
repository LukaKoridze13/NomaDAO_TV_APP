import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { API_login } from "../api/requests.js";
import { useNavigate } from "react-router-dom";
export default function MarketplaceLogin() {
  const [error, setError] = useState("");
  // hooks
  const navigate = useNavigate();
  // refs
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleSubmit() {
    // prettier-ignore
    let response = await API_login({email: emailRef.current.value, password: passwordRef.current.value});
    if (response.error) {
      setError(response.error); // if response contains error, it will be set
    } else {
      navigate("/marketplace/" + response.field+"/Home"); // navigate to corresponding page
    }
  }
  return (
    <div>
      
      <Title>Welcome Back</Title>
      <UnderTitle>Login into your account</UnderTitle>
      <Input ref={emailRef} placeholder="Email" type="mail" />
      <Input ref={passwordRef} placeholder="Password" type="password" />
      <Flex>
        <CheckBoxWrapper>
          <CheckBox id="remember" type="checkbox" />
          <CheckBoxLabel htmlFor="remember" />
        </CheckBoxWrapper>
        <Remember>Remember me</Remember>
      </Flex>
      <Error>{error}</Error>
      <Submit onClick={handleSubmit}>Login</Submit>
    </div>
  );
}

const Title = styled.p`
  color: #3f3f3f;
  font-size: 36px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 44px;
  text-align: center;
`;

const UnderTitle = styled.p`
  color: #3f3f3f;
  font-size: 18px;
  font-family: "Inter";
  text-align: center;
  margin-top: 5px;
`;

const Input = styled.input`
  display: flex;
  width: 442px;
  height: 70px;
  padding: 8px 24px;
  border-radius: 10px;
  border: 1px solid var(--gray-400, #b1b1b1);
  margin-top: 15px;
  &:first-of-type {
    margin-top: 45px;
  }

  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
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
  background: #bebebe;
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
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
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

const Remember = styled.span`
  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
  margin-left: 15px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 442px;
  height: 64px;
  padding: 8px 24px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: transparent;
  border: 1px solid var(--gray-800, #3f3f3f);

  color: var(--gray-800, #3f3f3f);
  font-size: 16px;
  font-family: "Inter";
  line-height: 14.5px;
  cursor: pointer;

  &:hover {
    background-color: #0699d2;
    color: white;
    border: #0699d2;
  }
`;

const Error = styled.p`
  color: #ae0505;
  font-size: 18px;
  font-family: "Inter";
  line-height: 40px;
`;
