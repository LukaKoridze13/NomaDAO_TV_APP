import React from "react";
import close from "../assets/images/close.svg";
import { styled } from "styled-components";
export default function Popup(props) {
  return (
    <Wrapper>
      <Popupp>
        <ProfileBox>
          <Avatar />
          <Name>{props.name}</Name>
        </ProfileBox>
        <CloseBox
          onClick={() => {
            props.setPopup(false);
          }}
        >
          <CloseText>Close window</CloseText>
          <CloseImage src={close} />
        </CloseBox>
        <InfoBox>
          <InfoText>Branch location: Georgia, Tbilisi</InfoText>
          <InfoText>Phone: +995 00 030002</InfoText>
          <InfoText>Email: tourAgent@uys.io</InfoText>
          <InfoText>Mob: +995 00 030002</InfoText>
          <InfoText>www.agentworlduys.io</InfoText>
          <InfoText>Rating: 4.5</InfoText>
        </InfoBox>
        <GroupInfo>
          Group Information
          <GroupBox>
            <span>Status</span>
            <Status>Pending</Status>
          </GroupBox>
          <GroupBox>
            <span>Location: </span>
            <span>Budapest</span>
          </GroupBox>
          <GroupBox>
            <span>Travelers: </span>
            <span> 85 Adult / 4 Child</span>
          </GroupBox>
          <GroupBox>
            <span>Date: </span>
            <span> 25Jun - 03Jul</span>
          </GroupBox>
          <GroupBox>
            <span>Price: </span>
            <span>$ 47</span>
          </GroupBox>
          <GroupBox>
            <span>Total Price: </span>
            <span>$ 4,183</span>
          </GroupBox>
        </GroupInfo>
        <Description>
          <DescTitle>Description</DescTitle>
          <Desc>
            Group-friendly hotels provide spacious rooms or suites that can
            comfortably accommodate multiple guests. They often offer amenities
            and facilities that are conducive to group activities and
            interactions, such as meeting rooms, banquet halls, or common areas
            for socializing. These spaces are designed to facilitate team
            meetings, conferences, group meals, or networking events.
          </Desc>
          <Accept>Accept</Accept> <Negotiate>Negotiate</Negotiate>
        </Description>
      </Popupp>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
  background-color: #0000004c;

  position: absolute;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  place-content: center;

  font-family: "Inter";
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  background-color: #fe7c31;
  border: 5px solid black;
  border-radius: 50%;
`;

const Name = styled.p`
  color: var(--gray-800, #3f3f3f);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-left: 10px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 16px;
`;

const Popupp = styled.div`
  width: 515px;
  height: 520px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const CloseText = styled.p`
  color: var(--gray-800, #3f3f3f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const CloseImage = styled.img`
  margin-left: 10px;
`;

const CloseBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 16px;

  cursor: pointer;
`;

const InfoBox = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #0699d2;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  flex-wrap: wrap;
  margin-top: 80px;
`;

const InfoText = styled.p`
  width: 48%;
  color: var(--gray-900, #202020);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  border-radius: 4px;
  background: rgba(216, 216, 216, 0.5);
  padding: 8px;
`;

const GroupInfo = styled.div`
  width: 48%;
  display: inline-block;
  vertical-align: top;
  margin-top: 30px;
  padding: 8px;
  border-radius: 4px;
  background: var(--orange, #fe7c31);

  color: var(--gray-100, #ececec);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const GroupBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  background: rgba(216, 216, 216, 0.5);

  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  margin-top: 11.5px;
`;

const Status = styled.span`
  padding: 4px;
  background-color: #fdf8ce;
  color: #938406;
  border-radius: 4px;
`;

const Description = styled.div`
  width: 48%;
  display: inline-block;
  vertical-align: top;
  margin-top: 30px;
  margin-left: 4%;
`;

const DescTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const Desc = styled.p`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-top: 10px;
`;

const Accept = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background: var(--orange, #fe7c31);
  border: none;

  color: var(--gray-100, #ececec);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-top: 15px;
  cursor: pointer;
`;

const Negotiate = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background: var(--blue, #0699d2);
  border: none;

  color: var(--gray-100, #ececec);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 15px;

  cursor: pointer;
`;
