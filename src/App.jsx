import React, { useEffect, useState } from "react";
import BookingContext from "./context/BookingContext";
import { Outlet, useNavigate } from "react-router-dom";
import AsideContext from "./context/AsideContext";
import ProductContext from "./context/ProductContext";
export default function App() {
  // hooks
  const navigate = useNavigate();
  // states
  const [asideActive, setAsideActive] = useState(true); // should aside navigation events be active
  // prettier-ignore
  const [pages, setPages] = useState([ "Home", "Nomad Entertainment", "Hotel Highlights in 3D", "World 3D Tour (sightseeing)","Book Your Hotel", "Marketplace"]); // list of all pages
  const [activePage, setActivePage] = useState(0); // the page index from pages which is currently active
  const [product, setProduct] = useState(null); // to save single product page which was last visited, becaise navigate(-1) doesn't work on TV when we want to go back from streaming
  // prettier-ignore
  const [bookingParams, setBookingParams] = useState({showHotels: false, location: "Tbilisi",checkIn: new Date(),checkOut: new Date(), guests: 2}); //user filled booking data stored

  // navigate to home page on first render
  useEffect(() => {
    navigate("/Home");
  }, [navigate]);

  return (
    // prettier-ignore
    <AsideContext.Provider value={{ asideActive, setAsideActive, pages, setPages, activePage, setActivePage}}>
      <BookingContext.Provider value={{bookingParams, setBookingParams}}>
          <ProductContext.Provider value={{product, setProduct}}>
            <Outlet />
          </ProductContext.Provider>
      </BookingContext.Provider>
    </AsideContext.Provider>
  );
}
