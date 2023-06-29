import React from "react";
import MarketplaceHeader from "./MarketplaceHeader";
import { styled } from "styled-components";
import MontyleReport from "./MontyleReport";
import TableHotel from "./Table";
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
      "Confirmed",
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
  return (
    <Wrapper>
      <MarketplaceHeader />
      <MontyleReport />
      {/* prettier-ignore */}
      <TableHotel header={data.header} rows={data.rows} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 60px 20px 0px 20px;
`;
