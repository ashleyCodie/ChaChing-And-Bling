import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const WishList = () => {
  const { wishList } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" pe-20">
      <h1 className="text-center text-7xl text-red-600 mt-5 ml-30">My Wish List</h1>
      {wishList.length > 0 ? (
        <div className=" ps-20 pe-20">
        
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex flex-col justify-center items-start text-base leading-relaxed text-gray-500">
              {wishList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div className="ml-96">
                        <img
                          className="rounded-md h-[125px]"
                          src={
                            new URL(
                              `../assets/images/${item.image}`,
                              import.meta.url
                            ).href
                          }
                          alt={item.productName}
                        />
                      </div>
                      <div className="pe-40">
                        <div className="flex flex-col items-start text-red-600">
                          <h4>{item.productName}</h4>
                        </div>
                        <p className="text-black">
                          Description:
                          <span className="ml-2">{item.description}</span>
                        </p>
                        <p className="text-black">
                          Price:
                          <span className="ml-2">
                            ${item.price["$numberDecimal"]}
                          </span>
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-red-600 text-lg ml-40">
            
                <div className="ml-96">
                  <Tooltip
                    content="Continue Shopping"
                    className="text-black bg-red-600 text-md"
                    placement="bottom"
                  >
                    <Button
                      onClick={() => navigate("/products")}
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className=" p-3 tooltip text-black bg-red-600  hover:text-red-600 hover:bg-black mt-5 ml-52"
                    >
                      Continue Shopping
                    </Button>
                  </Tooltip>
                </div>
              
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-center mt-10">
            You have No Items Added to Your Wish List
          </h1>
          <div className="text-red-600 text-lg ">
            <div>
              <div className="ml-76">
                <Tooltip
                  content="Continue Shopping"
                  className="text-black bg-red-600 text-md"
                  placement="bottom"
                >
                  <Button
                    onClick={() => navigate("/products")}
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className=" p-3 tooltip text-black bg-red-600  hover:text-red-600 hover:bg-black mt-5 ml-96"
                  >
                    Continue Shopping
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;