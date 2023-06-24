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
