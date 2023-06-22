import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import HOTELS from "../data/hotels.js";
import useConditionalHandler from "../hooks/useConditionalHandler.js";
import useMoveSound from "../hooks/useMoveSound.js";
const otherImages = [
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern1-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern1-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-5.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-6.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern6-6.jpg",
];
const rooms = [
  {
    roomType: "Standard Single Room",
    roomPrice: "65",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  },
  {
    roomType: "Standard Double/Twin Room",
    roomPrice: "75",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  },
  {
    roomType: "Superior double/ twin",
    roomPrice: "90",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-2.jpg",
  },
  {
    roomType: "Superior double/ twin",
    roomPrice: "90",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-6.jpg",
  },
  {
    roomType: "Junior Suite",
    roomPrice: "110",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern6-6.jpg",
  },
  {
    roomType: "Barnov Suite",
    roomPrice: "140",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  },
];
export default function SingleHotel() {
  // get the name of the hotel from the route
  const { hotelName } = useParams();
  // state
  // before getting real otherImages in each hotel, adding testing
  // prettier-ignore
  const [hotel, setHotel] = useState({ ...HOTELS.find((hotel) => hotel.name === hotelName), otherImages, rooms});
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(true);
  const [roomsActive, setRoomsActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
  // refs
  const roomsRef = useRef(null);
  const wrapperRef = useRef(null);
  //  hooks
  const navigate = useNavigate();
  const moveSound = useMoveSound;
  // adding events
  useConditionalHandler(sliderEvents, isSliderActive);
  useConditionalHandler(backButtonEvents, backActive);
  useConditionalHandler(roomsEvents, roomsActive);
  // event handlers
  function sliderEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        goRooms();
        moveSound();
        break;

      // Up Arrow
      case 38:
        goBackButton();
        moveSound();
        break;

      // Left Arrow
      case 37:
        prevSlide();
        moveSound();
        break;

      // Right Arrow
      case 39:
        nextSlide();
        moveSound();
        break;

      // Backspace
      case 8:
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();

        break;
      // Enter - Ok
      case 13:
        break;

      default:
        break;
    }
  }
  function roomsEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        nextRoom();
        moveSound();
        break;

      // Up Arrow
      case 38:
        prevRoom();
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
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        break;

      default:
        break;
    }
  }
  function backButtonEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        goToSlider();
        moveSound();
        break;

      // Up Arrow
      case 38:
        break;

      // Left Arrow
      case 37:
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        goToSearchingHotelsPage();
        moveSound();

        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();

        break;
      // Enter - Ok
      case 13:
        goToSearchingHotelsPage();
        moveSound();

        break;

      default:
        break;
    }
  }
  // other functions
  function nextSlide() {
    if (sliderIndex + 1 === hotel.otherImages.length) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  }
  function prevSlide() {
    if (sliderIndex === 0) {
      setSliderIndex(hotel.otherImages.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  }
  function goRooms() {
    setBackActive(false);
    setRoomsActive(true);
    setIsSliderActive(false);
    scrollToRef(roomsRef);
    setActiveRoom(0);
  }
  function goToSlider() {
    setBackActive(false);
    setRoomsActive(false);
    setIsSliderActive(true);
    scrollToRef(wrapperRef);
    setActiveRoom(null);
  }
  function goBackButton() {
    setBackActive(true);
    setRoomsActive(false);
    setIsSliderActive(false);
    scrollToRef(wrapperRef);
  }
  function goToSearchingHotelsPage() {
    navigate("/BookYourHotel");
  }
  function scrollToRef(elementRef) {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  function nextRoom() {
    if (activeRoom === hotel.rooms.length - 1) {
      setActiveRoom(0);
      scrollToElement(roomsRef.current.children[0]);
    } else {
      setActiveRoom(activeRoom + 1);
      scrollToElement(roomsRef.current.children[activeRoom + 1]);
    }
  }
  function prevRoom() {
    if (activeRoom === 0) {
      setActiveRoom(null);
      goToSlider();
    } else {
      setActiveRoom(activeRoom - 1);
      scrollToElement(roomsRef.current.children[activeRoom - 1]);
    }
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Image src="https://nomadao.net/public/uploads/0000/1/2023/04/05/form-bg.jpg" />
      <GrayButton active={backActive ? "true" : "false"}>Back</GrayButton>
      <Rating>{hotel.rating} / 5</Rating>
      <HotelName>{hotel.name}</HotelName>
      {/* prettier-ignore */}
      <Location>Location: {hotel.location}</Location>
      {/* prettier-ignore */}
      <SliderWrapper active={isSliderActive ? "true" : "false"}  >
        <ArrowRight src="https://i.ibb.co/ymThbpH/arrow-right.png"/>
        <ArrowLeft src="https://i.ibb.co/ymThbpH/arrow-right.png"/>
        <SliderRelative index={sliderIndex} length={hotel.otherImages.length}>
          {hotel.otherImages.map((image, index) => (
            <Slider key={image+index} image={image} />
          ))}
        </SliderRelative>
      </SliderWrapper>
      {/* prettier-ignore */}
      <CheckAvailability  active={roomsActive ? "true" : "false"} >Check Availability</CheckAvailability>
      {/* prettier-ignore */}
      <Rooms ref={roomsRef}  active={roomsActive ? "true" : "false"}>
      {/* prettier-ignore */}
      {hotel.rooms.map((room, index) => (
            <Room active={activeRoom===index ? 'true' : 'false'} key={room.roomType+index}>
              <RoomImg src={room.roomImage} />
              <RoomType>{room.roomType}</RoomType>
              <RoomPrice>${room.roomPrice} / night</RoomPrice>
              <RoomBook active={activeRoom===index ? 'true' : 'false'}>Book Room</RoomBook>
            </Room>
          ))}
      </Rooms>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 150vh;
  max-width: 1920px;
  max-height: 1720px;
  overflow: scroll;
  background-color: rgb(204, 227, 236);
  position: relative;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GrayButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.active === "true" ? "#01739f" : "#d8d8d8")};
  border-radius: 8px;
  border: none;
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => (props.active === "true" ? "white" : "#5f5f5f")};
  position: absolute;
  top: 110px;
  left: 100px;
`;

const HotelName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #01739f;

  position: absolute;
  top: 160px;
  left: 100px;
`;

const Location = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #3f3f3f;

  position: absolute;
  top: 190px;
  left: 100px;
`;

const SliderWrapper = styled.div`
  width: 60vw;
  height: 35vw;
  max-width: 1152px;
  max-height: 672px;
  position: relative;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25px;
  border-style: solid;
  border-width: 10px;
  border-color: ${(props) =>
    props.active === "true" ? "#01739f" : "transparent"};
  overflow: hidden;
`;

const SliderRelative = styled.div`
  width: fit-content;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  border-radius: 20px;
  transform: translateX(
    ${(props) => `-${props.index * (100 / props.length)}%`}
  );
`;

const Slider = styled.div`
  width: 60vw;
  max-width: 1128px;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 5;
  width: 80px;
`;

const ArrowLeft = styled(ArrowRight)`
  transform: translateY(-50%) rotate(180deg);
  right: auto;
  left: 20px;
`;

const CheckAvailability = styled.div`
  position: absolute;
  padding: 15px 30px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  transform: translateY(-100%);

  border-style: solid;
  border-color: #01739f;
  border-width: 2px;
  background: ${(props) =>
    props.active === "true" ? "#01739f" : "transparent"};
  color: ${(props) => (props.active === "true" ? "white" : "#01739f")};
  right: 20%;
  top: 1002px;
`;

const Rooms = styled.div`
  width: 60vw;
  height: 35vw;
  max-width: 1152px;
  max-height: 672px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1000px;
  border-style: solid;
  border-color: #01739f;
  border-width: ${(props) => (props.active === "true" ? "15px" : "2px")};
  overflow: auto;
  border-radius: 20px;
  border-top-right-radius: 0px;

`;

const Room = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #01739f;
  background-color: ${(props) =>
    props.active === "true" ? "#68b1ce" : "white"};
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100vw;
  max-width: 1920px;
  position: absolute;
  top: 0px;
  transform: translateY(-88%);
`;

const Rating = styled.div`
  width: fit-content;
  padding: 12px 16px;
  background: #01739f;
  border-radius: 4px;

  display: grid;
  place-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #ececec;

  position: absolute;
  top: 160px;
  right: 100px;
`;

const RoomImg = styled.img`
  width: 20%;
  min-height: 100%;
  position: absolute;
  left: 0px;
`;

const RoomType = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: #131313;

  position: absolute;
  top: 15px;
  left: 30%;
`;

const RoomPrice = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: #131313;

  position: absolute;
  top: 20%;
  right: 10%;
`;

const RoomBook = styled.button`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  color: #131313;
  padding: 8px 12px;
  position: absolute;
  top: 50%;
  right: 10%;
  border-radius: 10px;
  border: 2px solid #68b1ce;
  background-color: ${(props) =>
    props.active === "true" ? "#01739f" : "white"};
  color: ${(props) => (props.active === "true" ? "white" : "#01739f")};
`;
