import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link, useParams } from "react-router";
// import { filterItems } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../redux/productSlice";
import belts from "../assets/images/belts.jpg";

const NavigateButtons = () => {
  const buttons = [
    "Dresses",
    "Shirts",
    "Pants",
    "Shoes",
    "Belts",
    "Jewelry",
    "Purses",
    "Other"
  ];

  const { category } = useParams();

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/product/" + button}>
                <Button
                  onClick={() => {
                    console.log("button", button);
                    dispatch(getCategory(button));
                  }}
                  className="text-red-600 p-5 hover:bg-black duration-500 ease-in-out"
                  variant="outlined"
                  ripple={true}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black text-red-600 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-center font-extrabold tracking-normal text-lg leading-none">
          New Items Added Daily
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-lg shadow-lg shadow-gray-600"
          src={belts}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavigateButtons;