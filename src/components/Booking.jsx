import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMoveSound from "../hooks/useMoveSound";
import SearchedHotel from "./SearchedHotel";
import "./Booking.css";
import HOTELS from "../data/hotels.js";
import { useNavigate } from "react-router-dom";
import BookingContext from "../context/BookingContext";
import useConditionalHandler from "../hooks/useConditionalHandler";
import { cosine } from "string-comparison";
import AsideContext from "../context/AsideContext";

export default function Booking() {
  // States
  const [activeInputBox, setActiveInputBox] = useState(null);
  const [isInsideSearchBox, setIsInsideSearchBox] = useState(false);
  const [isInsideInput, setIsInsideInput] = useState(false);
  const [isInsideHotels, setIsInsideHotels] = useState(false);
  const [activeHotel, setActiveHotel] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState(HOTELS);
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();
  // contexts
  const asideContext = useContext(AsideContext);
  const { asideActive, setAsideActive } = asideContext;
  const bookingContext = useContext(BookingContext);
  // prettier-ignore
  const { showHotels, location, checkIn, checkOut, guests } = bookingContext.bookingParams;
  // prettier-ignore
  // used references
  const wrapperRef = useRef(null);
  const locationRef = useRef(null);
  const checkinRef = useRef(null);
  const checkoutRef = useRef(null);
  const guestsRef = useRef(null);
  const searchRef = useRef(null);
  const hotelsWrapperRef = useRef(null);
  // references of inputs
  // prettier-ignore
  let inputRefs = [locationRef, checkinRef, checkoutRef, guestsRef, searchRef];

  // useEffects

  // automatically set that user is in searchbox when this page becames active from navigation, and activate first input box
  useEffect(() => {
    if (!asideActive) {
      setIsInsideSearchBox(true);
      setActiveInputBox(1);
    }
  }, [asideActive]);

  // enable event when user is inside any box
  useConditionalHandler(searchNav, isInsideSearchBox);
  useConditionalHandler(insideInpNav, isInsideInput);
  useConditionalHandler(searchedHotelsNav, isInsideHotels);

  // filtering hotels list
  const filterHotels = useCallback(() => {
    let newHotels = HOTELS.filter(
      (hotel) =>
        // if more then 50% similar, approve filter
        cosine.similarity(
          hotel.location.toLowerCase().replace(/\s/g, ""),
          bookingContext.bookingParams.location.toLowerCase().replace(/\s/g, "")
        ) > 0.5
    );
    // if none found, return all
    if (newHotels.length === 0) {
      newHotels = HOTELS;
    }
    setFilteredHotels([...newHotels]);
  }, [bookingContext.bookingParams.location]);

  // responsible to update filtered hotels list
  useEffect(() => {
    showHotels && filterHotels();
  }, [showHotels, filterHotels]);

  // Navigation event handlers
  // when user is inside hotels list
  function searchedHotelsNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        nextHotel();
        moveSound();
        break;

      // Up Arrow
      case 38:
        prevHotel();
        moveSound();
        break;

      // Left Arrow
      case 37:
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        goBackToNavigation();
        break;

      // Back button on remote
      case 10009:
        goBackToNavigation();
        break;
      // Enter - Ok
      case 13:
        openSingleHotel();
        break;

      default:
        break;
    }
  }
  // when is user is inside input box
  function insideInpNav(event) {
    switch (event.keyCode) {
      // Esc
      case 27:
        leaveInput();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        leaveInput();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        // automatically go inside the next input when submitting, if next isn't search button
        if (activeInputBox !== inputRefs.length - 1) {
          goToNextInput();
        } else {
          leaveInput();
          setActiveInputBox(activeInputBox + 1);
        }
        moveSound();
        break;
      default:
        break;
    }
  }
  // when is user is in search box
  function searchNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        // if hotels are vibile, go down with down arrow
        if (showHotels) {
          goInsideHotels();
          moveSound();
        }
        break;
      // Up Arrow
      case 38:
        break;
      // Left Arrow
      case 37:
        prevInput();
        moveSound();
        break;
      // Right Arrow
      case 39:
        nextInput();
        moveSound();
        break;
      // Backspace
      case 8:
        goBackToNavigation();
        moveSound();
        break;
      // Back button on remote
      case 10009:
        goBackToNavigation();
        moveSound();
        break;
      case 13:
        goInsideInput();
        moveSound();
        break;
      default:
        break;
    }
  }

  // Changing boxes
  function nextHotel() {
    if (activeHotel === filteredHotels.length) {
      setActiveHotel(1);
      handleScrollToHotel(1);
    } else {
      setActiveHotel(activeHotel + 1);
      handleScrollToHotel(activeHotel + 1);
    }
  }
  function prevHotel() {
    if (activeHotel === 1) {
      leaveAll();
      setIsInsideSearchBox(true);
      setActiveHotel(null);
      setActiveInputBox(1);
    } else {
      setActiveHotel(activeHotel - 1);
      handleScrollToHotel(activeHotel - 1);
    }
  }
  function openSingleHotel() {
    navigate("/hotel/" + filteredHotels[activeHotel - 1].name);
  }
  function goInsideHotels() {
    // activate hotels navigation, disable others navigation
    leaveAll();
    setIsInsideHotels(true);
    // activate first hotel
    filterHotels();
    setActiveHotel(1);
    setActiveInputBox(null);
  }
  function goInsideInput() {
    // if it's search input, activate search
    if (activeInputBox === inputRefs.length) {
      leaveAll();
      filterHotels();
      setActiveHotel(1);
      setIsInsideHotels(true);
      bookingContext.setBookingParams({
        ...bookingContext.bookingParams,
        showHotels: true,
      });
    } else {
      leaveAll();
      setIsInsideInput(true);
      focusInput();
    }
  }
  function goBackToNavigation() {
    leaveAll();
    setActiveHotel(null);
    setActiveInputBox(null);
    setAsideActive(true);
  }
  // removes every event handler
  function leaveAll() {
    setIsInsideHotels(false);
    setIsInsideInput(false);
    setIsInsideSearchBox(false);
  }
  function leaveInput() {
    leaveAll();
    setIsInsideSearchBox(true);
    blurInput();
  }
  // goes directly inside next input
  function goToNextInput() {
    leaveInput();
    leaveAll();
    setIsInsideInput(true);
    setActiveInputBox(activeInputBox + 1);
    focusInput(activeInputBox + 1);
  }
  // focus and blur inputs programatically emited
  // activeInputBox !== inputRefs.length is checked because last ref is button and it doesn't need focus
  // second and third inputs are custom date inputs so they don't need focus, they just set open

  function focusInput(activeInputBoxParam = activeInputBox) {
    // can get param which inp to focus, or focuses active one by default
    if (activeInputBoxParam) {
      if (activeInputBoxParam !== inputRefs.length) {
        if (activeInputBoxParam === 2 || activeInputBoxParam === 3) {
          inputRefs[activeInputBoxParam - 1].current.setOpen(true);
        } else {
          inputRefs[activeInputBoxParam - 1].current.focus();
        }
      }
    }
  }

  function blurInput() {
    if (activeInputBox) {
      if (activeInputBox !== inputRefs.length) {
        if (activeInputBox === 2 || activeInputBox === 3) {
          inputRefs[activeInputBox - 1].current.setOpen(false);
        } else {
          inputRefs[activeInputBox - 1].current.blur();
        }
      }
    }
  }

  // this functions are used when navigating through input boxes
  function prevInput() {
    // if it's already on first input, it should leave booking page and go back to navigation
    if (activeInputBox === 1) {
      goBackToNavigation();
    } else {
      setActiveInputBox(activeInputBox - 1);
    }
  }
  function nextInput() {
    if (activeInputBox === inputRefs.length) {
      setActiveInputBox(1);
    } else {
      setActiveInputBox(activeInputBox + 1);
    }
  }

  // this functions handle change events on inputs, and update filled information
  function handleGuestsChange(event) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      guests: event.target.value,
    });
  }
  function handleCheckInChange(date) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      checkIn: date,
    });
  }
  function handleCheckOutChange(date) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      checkOut: date,
    });
  }
  function handleLocationChange(event) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      location: event.target.value,
    });
  }

  // this function automatically scrolls hottels wrapper div element to the selected hotel
  function handleScrollToHotel(index) {
    const hotelElement = hotelsWrapperRef.current.children[index - 1];
    if (hotelElement) {
      hotelElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <BookingWrapper>
      <Title up={showHotels ? "true" : "false"}>Travel, Earn, Repeat!</Title>
      <SearchWrapper up={showHotels ? "true" : "false"} ref={wrapperRef}>
        <InputBox index={activeInputBox}>
          <InputText>Location</InputText>
          {/* prettier-ignore */}
          <Input type="text" value={location} ref={locationRef} onChange={handleLocationChange} />
        </InputBox>
        <InputBox index={activeInputBox}>
          <InputText>Check in</InputText>
          {/* prettier-ignore */}
          <DatePicker dateFormat="yyyy-MM-dd" ref={checkinRef}  selected={checkIn} onChange={handleCheckInChange} className="date-picker" />
        </InputBox>
        <InputBox index={activeInputBox}>
          <InputText>Check Out</InputText>
          {/* prettier-ignore */}
          <DatePicker dateFormat="yyyy-MM-dd" ref={checkoutRef} selected={checkOut} onChange={handleCheckOutChange} className="date-picker" />
        </InputBox>
        <InputBox index={activeInputBox}>
          <InputText>Guests</InputText>
          {/* prettier-ignore */}
          <Input ref={guestsRef} value={guests} type="number" min={0} max={100} onChange={handleGuestsChange}/>
        </InputBox>
        {/* prettier-ignore */}
        <Search ref={searchRef} index={activeInputBox}> Search </Search>
      </SearchWrapper>
      <HotelsWrapper ref={hotelsWrapperRef} up={showHotels ? "true" : "false"}>
        {filteredHotels.map((hotel) => {
          // prettier-ignore
          const {name,price,location,rating,mainImage,facilities} = hotel;
          // prettier-ignore
          return <SearchedHotel key={name} activeBox={activeHotel} name={name} rating={rating} mainImage={mainImage} facilities={facilities} location={location} price={price} />
        })}
      </HotelsWrapper>
    </BookingWrapper>
  );
}

// Styled Components

const BookingWrapper = styled.div`
  width: 75vw;
  height: 100vh;
  max-height: 1080px;
  max-width: calc(1920px * 3 / 4);

  position: absolute;
  @media (max-width: 1921px) {
    left: 25vw;
  }

  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 1921px) {
    left: 50%;
    transform: translateY(-50%) translateX(-485px);
  }
  background-image: url(https://nomadao.net/public/uploads/0000/1/2023/04/05/form-bg.jpg);
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-position: right;
`;
const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 58px;
  color: #ececec;
  transition: all 0.5s;
  position: absolute;
  top: ${(props) => (props.up === "true" ? "5%" : "40%")};
  left: 50%;
  transform: translateX(-50%);
`;
const SearchWrapper = styled.div`
  width: 90%;
  height: 100px;
  background: #ececec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s;
  top: ${(props) => (props.up === "true" ? "12%" : "50%")};
`;
const InputBox = styled.div`
  height: 40px;

  padding-right: 32px;
  border-right: 2px solid #b1b1b1;

  display: flex;
  flex-direction: column;

  &:last-of-type {
    border-right: none;
  }
  &:last-of-type {
    border-right: none;
  }
  &:nth-child(${(props) => props.index}) {
    background-color: #314cd450;
    padding: 10px;
    padding-inline: 32px;
    border-right: none;
    border-radius: 10px;
    height: 80px;
    justify-content: space-around;
  }
`;
const InputText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #01739f;
`;
const Search = styled.button`
  width: 160px;
  height: 45px;
  border: 2px solid #314bd4;
  border-radius: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #314bd4;

  &:nth-child(${(props) => props.index}) {
    background-color: #314bd4;
    color: white;
  }
`;
const Input = styled.input`
  background: transparent;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  color: #9e9e9e;
  &:focus {
    outline: none;
  }
`;
const HotelsWrapper = styled.div`
  width: 70%;
  height: 70%;
  overflow: auto;
  background-color: white;
  position: absolute;
  top: ${(props) => (props.up === "true" ? "25%" : "120%")};
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;
