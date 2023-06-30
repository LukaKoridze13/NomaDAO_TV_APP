import React from "react";
import { styled } from "styled-components";
import MontyleReport from "./MontyleReport";
import RelatedHotelFares from "./RelatedHotelFares";
import Table from "./Table";
import { useOutletContext } from "react-router-dom";
const data = {
  header: [
    "Publisher",
    "Status",
    "Guests",
    "Location",
    "Rooms",
    "Date",
    "Price",
    "Photos",
    "Action",
  ],
  rows: [
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Unverified",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
  ],
};
export default function DashboardAgency() {
  const {setPopup} = useOutletContext()
  return (
    <Wrapper>
      <MontyleReport />
      <Title>New rooms</Title>
      <RelatedHotelFares />
      <Table header={data.header} rows={data.rows} setPopup={setPopup} />
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
