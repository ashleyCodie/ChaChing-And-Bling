import { useEffect, useState } from "react"
import {useNavigate} from "react-router"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice"

const CartModal = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 
  const [cartTax, setCartTax] = useState(0.00)
  const [finalTotal, setFinalTotal] = useState(0.00)

  const dispatch = useDispatch(); 
  const navigate = useNavigate()

    useEffect(() => {
      const calculateTax = () => {
        const tax = totalPrice * 0.09
        const finalTotal = totalPrice + tax
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        setCartTax(formatter.format(tax))
        setFinalTotal(formatter.format(finalTotal))
      }
      calculateTax()
 
    }, [cart])

  useEffect(() => {
    const calculateTax = () => {
      const tax = totalPrice * 0.09
      const finalTotal = totalPrice + tax
      const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      setCartTax(formatter.format(tax))
      setFinalTotal(formatter.format(finalTotal))
    }
    calculateTax()
   
  }, [cart])



  return (
    <div className="">
      {cart.length > 0 ? (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          open={openModal}
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-20 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                <h3 className="text-xl font-semibold text-red-600">
                  Your Cart
                </h3>
              </div>
              {/* <!-- Modal body --> */}
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
                          <div>
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
                              <span className="ml-2">${item.price["$numberDecimal"]}</span>
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
                    )
                  })}
                </div>
                <div>
                  <p >Sub Total: ${totalPrice}</p>
                  <p>Tax:{cartTax}</p>
                  <p>Total:{finalTotal}</p>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className=" items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <button
                onClick={() => navigate("/cart-details")}
                  data-modal-hide="static-modal"
                  type="button"
                  className="ml-60 text-black bg-red-600 hover:bg-red-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blackfont-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          open={openModal}
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-20 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm ">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                <h3 className="text-xl font-semibold text-red-600 ">
                  Your Cart
                </h3>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-black ">
                  Your Cart Is Empty!
                </p>
                <p className="text-base leading-relaxed text-black ">
                  Add Some Items Now!
                </p>
                <div>
                  <p>Sub Total: $0</p>
                  <p>Total: $0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;