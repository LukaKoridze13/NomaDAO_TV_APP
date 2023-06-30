import React from "react";
import { styled } from "styled-components";
import MontyleReport from "./MontyleReport";
import Table from "./Table";
import RelatedHotelFares from "./RelatedHotelFares";
import { useOutletContext } from "react-router-dom";
const data = {
  header: [
    "Tour Agency",
    "Status",
    "Travelers",
    "Destination",
    "Rooms",
    "Date",
    "Price",
    "Action",
  ],
  rows: [
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Unverified",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
  ],
};
export default function DashboardHotel() {
  const { setPopup } = useOutletContext();
  return (
    <Wrapper>
      <MontyleReport />
      {/* prettier-ignore */}
      <Title>New Inquiries</Title>
      <Table header={data.header} rows={data.rows} setPopup={setPopup} />
      <RelatedHotelFares />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 60px 50px 0px 50px;
`;

const Title = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
