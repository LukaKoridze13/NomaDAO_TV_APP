import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { API_register } from "../api/requests.js";
import { useNavigate } from "react-router-dom";
export default function MarketplaceRegister() {
  const [error, setError] = useState(""); // error text
  // hooks
  const navigate = useNavigate();
  // submit function
  async function handleSubmit() {
    if (password.current.value !== repeatPassword.current.value) {
      setError("Passwords do not match");
    } else {
      // prettier-ignore
      let response = await API_register({companyName: name.current.value,companyField: field_hotel.current.checked ? "Hotel" : "Agency",companyID: id.current.value,email: email.current.value,phoneNumber: phone.current.value,website: website.current.value,password: password.current.value});
      if (response.error) {
        setError(response.error); // if response contains error, it will be set
      } else {
        let page = field_hotel.current.checked ? "hotel" : "agency"
        navigate(
          "/marketplace/" + page +"/Home"
        ); // navigate to corresponding page
      }
    }
  }
  
  // references for inputs
  const field_hotel = useRef();
  const field_agency = useRef();
  const name = useRef();
  const id = useRef();
  const email = useRef();
  const phone = useRef();
  const website = useRef();
  const password = useRef();
  const repeatPassword = useRef();
  return (
    <Wrapper>
      <Title>Get Started With NOMADAO</Title>
      <UnderTitle>Getting started is easy</UnderTitle>
      <Flex>
        <Label htmlFor="hotel">Hotel</Label>
        {/* prettier-ignore */}
        <Radio ref={field_hotel} type="radio" id="hotel" name="field" defaultChecked/>
        <Label htmlFor="agency">Agency</Label>
        <Radio ref={field_agency} type="radio" id="agency" name="field" />
      </Flex>
      {/* prettier-ignore */}
      <Input ref={name} placeholder="Company Name" type="text"/>
      <Input ref={id} placeholder="Company ID/Tax Number" type="text" />
      <Input ref={email} placeholder="Email" type="email" />
      <Input ref={phone} placeholder="Phone Number" type="phone" />
      <Input ref={website} placeholder="Website" type="text" />
      <Input ref={password} placeholder="Password" type="password" />
      {/* prettier-ignore */}
      <Input ref={repeatPassword} placeholder="Confirm Password" type="password" />
      <Error>{error}</Error>
      <Submit onClick={handleSubmit}>Create an account</Submit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
`;

const Title = styled.p`
  color: #3f3f3f;
  font-size: 24px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  width: fit-content;
  margin-inline: auto;
`;

const UnderTitle = styled.p`
  color: #3f3f3f;
  font-size: 18px;
  font-family: "Inter";
  text-align: center;
  margin-top: 5px;
  width: fit-content;
  margin-inline: auto;
`;

const Input = styled.input`
  display: flex;
  width: 442px;
  height: 70px;
  padding: 8px 24px;
  border-radius: 10px;
  border: 1px solid var(--gray-400, #b1b1b1);
  margin-top: 15px;
  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
  margin-inline: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 14px;
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
  margin-inline: auto;
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

const Label = styled.label`
  color: #3f3f3f;
  font-size: 20px;
  font-family: "Inter";
  cursor: pointer;
  &:last-of-type {
    margin-left: 30px;
  }
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const Error = styled.p`
  color: #ae0505;
  font-size: 18px;
  font-family: "Inter";
  line-height: 40px;
`;
