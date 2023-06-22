import React, { useState } from "react";
import EventsContext from "./context/EventsContext";
import BookingContext from "./context/BookingContext";
import { Outlet } from "react-router-dom";

import NomadEntertainment from "./assets/images/NomadEntertainment.png";
import HotelHighlightsin3D from "./assets/images/HotelHighlightsin3D.png";
import World3DTour from "./assets/images/World3DTour(sightseeing).png";
import Home from "./assets/images/Home.png";
import Booking from "./assets/images/Booking.png";

export default function App() {
  const [asideNavigation, setAsideNavigation] = useState(true);
  const [pageContentNavigation, setPageContentNavigation] = useState(false);
  // prettier-ignore
  const [bookingParams, setBookingParams] = useState({showHotels: false, location: "Tbilisi",checkIn: new Date(),checkOut: new Date(), guests: 2});
  
  const [pages, setPages] = useState([
    { name: "Home", icon: Home, active: true },
    {
      name: "Nomad Entertainment",
      icon: NomadEntertainment,
      active: false,
    },
    {
      name: "Hotel Highlights in 3D",
      icon: HotelHighlightsin3D,
      active: false,
    },
    {
      name: "World 3D Tour (sightseeing)",
      icon: World3DTour,
      active: false,
    },
    {
      name: "Book Your Hotel",
      icon: Booking,
      active: false,
    },
  ]);
  const [singlePages, setSinglePages] = useState([
    {
      title: "Nomadao Event Hall",
      img: "https://i.ibb.co/SvqxsMC/eventhall.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
      launch_link: "https://rooms.nomadao.net:4443",
      tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
    },
    {
      title: "3D Casino",
      img: "https://i.ibb.co/7XkP6Nq/casino.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
      launch_link: "https://rooms.nomadao.net:4443",
      tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
    },
    {
      title: "3D Hotel Tour",
      img: "https://i.ibb.co/2Kn8fM2/hotel.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
      launch_link: "https://rooms.nomadao.net:4443",
      tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
    },
    {
      title: "World 3D Tour",
      img: "https://i.ibb.co/hYWMKsd/verse.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
      launch_link: "https://rooms.nomadao.net:4443",
      tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
    },
  ]);
  const [content, setContent] = useState({
    Home: [
      {
        title: "Nomadao Event Hall",
        img: "https://i.ibb.co/yg8SBcY/eventhall-banner.png",
      },
      {
        type: "small",
        title: "3D Casino",
        img: "https://i.ibb.co/NYFtq1D/casino-small.png",
      },
      {
        type: "small",
        title: "3D Hotel Tour",
        img: "https://i.ibb.co/qyNXDBn/hotel-small.png",
      },
      {
        type: "small",
        title: "World 3D Tour",
        img: "https://i.ibb.co/YD1wfD3/verse-small.png",
      },
    ],
    NomadEntertainment: [
      {
        type: "big",
        title: "3D Casino",
        description:
          "Lorem ipsum dolor sit amet consectetur. amet consectetur. amet consectetur. ",
        img: "https://i.ibb.co/JkRzh9B/casino-big.png",
      },
      {
        type: "big",
        title: "Nomadao Event Hall",
        description:
          "Lorem ipsum dolor sit amet consectetur. amet consectetur. amet consectetur. ",
        img: "https://i.ibb.co/yg8SBcY/eventhall-banner.png",
      },
    ],
    HotelHighlightsin3D: [
      {
        type: "big",
        title: "3D Hotel Tour",
        description:
          "Lorem ipsum dolor sit amet consectetur. amet consectetur. amet consectetur. ",
        img: "https://i.ibb.co/3S2DQYT/room-big.png",
      },
    ],
    "World3DTour(sightseeing)": [
      {
        type: "big",
        title: "World 3D Tour",
        description:
          "Lorem ipsum dolor sit amet consectetur. amet consectetur. amet consectetur. ",
        img: "https://i.ibb.co/x6QZvSy/verse-big.png",
      },
    ],
    BookYourHotel: [
      {
        type: "big",
        title: "World 3D Tour",
        description:
          "Lorem ipsum dolor sit amet consectetur. amet consectetur. amet consectetur. ",
        img: "https://i.ibb.co/x6QZvSy/verse-big.png",
      },
    ],
  });
  return (
    // prettier-ignore
    <EventsContext.Provider value={{asideNavigation,setAsideNavigation,pageContentNavigation,setPageContentNavigation,pages,setPages,singlePages,setSinglePages,content,setContent,}}>
      {/* prettier-ignore */}
      <BookingContext.Provider value={{bookingParams, setBookingParams}}>
        <Outlet />
      </BookingContext.Provider>
    </EventsContext.Provider>
  );
}
