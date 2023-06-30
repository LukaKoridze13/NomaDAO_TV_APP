import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import PageContent from "./components/PageContent";
import Product from "./components/Product";
import Home from "./components/Home";
import Streaming from "./components/Streaming";
import Error from "./components/Error";
import Booking from "./components/Booking";
import SingleHotel from "./components/SingleHotel";
import HomeContent from "./components/HomeContent";
import AuthMarketplace from "./components/AuthMarketplace";
import MarketplaceHotel from "./components/MarketplaceHotel";
import MarketplaceAgency from "./components/MarketplaceAgency";
import DashboardHotel from "./components/DashboardHotel";
import DashboardAgency from "./components/DashboardAgency";
import ActiveBalanceHotel from "./components/ActiveBalanceHotel";
import ActivebalanceAgency from "./components/ActiveBalanceAgency";
import GroupRequestsHotel from "./components/GroupRequestsHotel";
import ControlPanelHotel from "./components/ControlPanelHotel";
import ControlPanelAgency from "./components/ControlPanelAgency";
import PublishedHotelsAgency from "./components/PublishedHotelsAgency";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main application component
    children: [
      {
        path: "/",
        element: <Home />, // Home component rendered when the path is '/' as known as index element
        children: [
          {
            path: "Marketplace",
            element: <AuthMarketplace />, // Marketplace login/register page
          },
          {
            path: "BookYourHotel",
            element: <Booking />, // Booking component rendered when the path is '/BookYourHotel', it's custom page, so doesn't share same struture as /:pageName
          },
          {
            path: "Home",
            element: <HomeContent />, // HomeContent component rendered when the path is '/Home', it's custom page, so doesn't share same struture as /:pageName
          },
          {
            path: "index.html",
            element: <HomeContent />, // HomeContent component rendered when the path is '/index.html', for localhost
          },
          {
            path: ":pagename",
            element: <PageContent />, // PageContent component rendered for dynamic paths, e.g., '/Home', '/Entertainment'
          },
        ],
      },
      {
        path: "/products/:product",
        element: <Product />, // Product component is used to show single product page
      },
      {
        path: "/streaming/:link",
        element: <Streaming />, // Streaming component is used to show pixel streaming
      },
      {
        path: "/hotel/:hotelName",
        element: <SingleHotel />, // SingleHotel component is used to show personal page for each hotel
      },
      {
        path: "/marketplace/hotel",
        element: <MarketplaceHotel />, // marketplace for hotel
        children: [
          { path: "Home", element: <DashboardHotel /> },
          { path: "ActiveBalance", element: <ActiveBalanceHotel /> },
          { path: "GroupRequests", element: <GroupRequestsHotel /> },
          { path: "ControlPanel", element: <ControlPanelHotel /> },
        ],
      },
      {
        path: "/marketplace/agency",
        element: <MarketplaceAgency />, // marketplace for hotel
        children: [
          { path: "Home", element: <DashboardAgency /> },
          { path: "ActiveBalance", element: <ActivebalanceAgency /> },
          { path: "PublishedHotels", element: <PublishedHotelsAgency /> },
          { path: "ControlPanel", element: <ControlPanelAgency /> },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Error />, // Error component rendered for unmatched routes
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} /> // Provider component for routing
);
