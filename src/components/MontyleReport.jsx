import React from "react";
import { styled } from "styled-components";

export default function MontyleReport() {
  return (
    <Wrapper>
      <Title>Monthly Report</Title>
      <Gray>
        <Orange>
          <Big>1,234</Big>
          <Small>Travelers</Small>
        </Orange>
        <Orange>
          <Big>123</Big>
          <Small>New partners</Small>
        </Orange>
        <Orange>
          <Big>$420,000</Big>
          <Small>Revenue Generated</Small>
        </Orange>
      </Gray>
      <See>See detailed report</See>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Title = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-top: 34px;
`;

const Gray = styled.div`
  display: flex;
  width: 920px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: #f7f7f7;
  margin-top: 10px;
`;

const Orange = styled.div`
  width: 207px;
  height: 80px;
  padding: 19px 15px;
  border-radius: 4px;
  background: var(--brandy, #fe7c31);
`;

const Big = styled.p`
  color: #fff;
  font-size: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Small = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const See = styled.p`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  margin-top: 10px;
`;
