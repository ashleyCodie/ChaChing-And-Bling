import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../redux/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
// import fakeData from "../data/fakeData"
import chanelShirt from "../assets/images/chanelshirt.jpg";
import coachShirt from "../assets/images/coachshirt.jpg";
import dress2 from "../assets/images/dress2.jpg";
import gucciHeels from "../assets/images/gucciheels.jpg";

export const sliderData = [
  {
    id: "0",
    image: chanelShirt,
    description: "Summer sale up to 50% off Shirts what are you waiting for!",
  },
  {
    id: "1",
    image: coachShirt,
    description: "Summer sale up to 25% off Tanks what are you waiting for!",
  },
  {
    id: "2",
    image: dress2,
    description:
      "Summer sale up to 50% off selected Dresses what are you waiting for!",
  },
  {
    id: "3",
    image: gucciHeels,
    description: "Summer sale up to 75% off Shoes what are you waiting for!",
  },
];

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative p-10">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="h-[850px] w-full" src={item.image} />
                )}
              </div>
              <div className="absolute top-14 mx-auto inset-x-1/4 text-center">
                <p className="text-red-600 text-4xl font-bold tracking-normal leading-none">
                  {parseInt(item.id) === slideIndex && item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[46%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-red-600 rounded-full p-4 cursor-pointer"
                    : "bg-black rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] left-20 bg-red-600 rounded-full p-2 border-black border-3 hover:bg-black hover:text-red-600 hover:border-red-600 cursor-pointer"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] right-20  bg-red-600 rounded-full p-2 border-black border-3 hover:bg-black hover:text-red-600 hover:border-red-600  cursor-pointer"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;