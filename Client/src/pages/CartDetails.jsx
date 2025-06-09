import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart} from "../redux/cartSlice"
import { Tooltip, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router"

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [cartTax, setCartTax] = useState(0.0);
  const [finalTotal, setFinalTotal] = useState(0.0);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const calculateTax = () => {
      const tax = totalPrice * 0.09;
      const finalTotal = totalPrice + tax;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      setCartTax(formatter.format(tax));
      setFinalTotal(formatter.format(finalTotal));
    };
    calculateTax();
  }, [cart]);

  useEffect(() => {
    const calculateTax = () => {
      const tax = totalPrice * 0.09;
      const finalTotal = totalPrice + tax;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      setCartTax(formatter.format(tax));
      setFinalTotal(formatter.format(finalTotal));
    };
    calculateTax();
  }, [cart]);
  return (
    <div className=" ps-60 pe-20">
      <h1 className="text-center text-7xl text-red-600 mt-5">Checkout</h1>
      <div className="p-4 md:p-5 space-y-4">
        <div className="flex flex-col justify-center items-start text-base leading-relaxed text-gray-500 ">
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-2 py-4">
                  <div>
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
                    <div className="flex flex-col items-start text-black">
                      <h4>{item.productName}</h4>
                    </div>
                  </div>
                  <div className="ml-15">
                    <p className="text-black">
                      Selected Size:
                      <span className="ml-2">{item.size}</span>
                    </p>
                    <p className="text-black">
                      Amount:
                      <span className="ml-2">{item.amount}</span>
                    </p>
                    <p className="text-black">
                      Price:
                      <span className="ml-2">
                        ${item.price["$numberDecimal"]}
                      </span>
                    </p>
                    <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                      Total Price:
                      <span className="ml-2">${item.totalPrice}</span>
                    </p>
                    <div className="grid grid-cols-2">
                      <div>
                        <button
                          type="button"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-bag-plus text-black"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-bag-dash ml-2 text-black"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-red-600 text-lg   grid grid-cols-4">
          
          <div>
          <p className="">Sub Total: ${totalPrice}.00</p>
          <p>Tax:{cartTax}</p>
          <p>Total:{finalTotal}</p>
          </div>
          <div></div>
         
          <div>
          <div>
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
          <div>
          <div>
                <Tooltip
                  content="Pay Now"
                  className="text-black bg-red-600 text-md"
                  placement="bottom"
                >
                  <Button
               onClick= {() => navigate("/payment")}
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className=" p-3 tooltip text-black bg-red-600 hover:text-red-600 hover:bg-black mt-5 ml-20"
                  >
                    Pay Now
                  </Button>
                </Tooltip>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;