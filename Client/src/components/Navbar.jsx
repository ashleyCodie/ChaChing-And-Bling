import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import CartModal from "./CartModal";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  console.log("user", user);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    console.log("handleOpen");
  };

  const handleLogout = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const logoutToken = token.split(",")[0];
      dispatch(logout(logoutToken));
      navigate("/");
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-200 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={
                new URL(`../assets/images/shoppingcart.svg`, import.meta.url)
                  .href
              }
              className="h-12 bg-red-600 rounded-lg p-2"
              alt="Shopping App"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              ChaChing&Bling
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                    location.pathname === "/" ? "text-red-600" : "text-black"
                  } md:border-0 md:hover:text-red-500 md:p-0 `}
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              {isLoggedIn && user.role.includes("Owner") && (
              <li>
                <Link
                  to="/inbox"
                  className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                    location.pathname === "/" ? "text-red-600" : "text-black"
                  } md:border-0 md:hover:text-red-500 md:p-0 `}
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Inbox
                </Link>
              </li>
              )}
              <li>
                <Link
                  to="/products"
                  className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                    location.pathname === "/products"
                      ? "text-red-600"
                      : "text-black"
                  } md:border-0 md:hover:text-red-500 md:p-0 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  All Products
                </Link>
              </li>
              {isLoggedIn && user.role.includes("User") && (
                <li>
                  <div
                    onClick={handleOpen}
                    className="flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:hover:text-red-600  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Cart
                    {totalAmount > 0 ? (
                      <span className="rounded-full bg-gray-400  ml-1 px-2 text-sm mr-1">
                        {totalAmount}
                      </span>
                    ) : (
                      <span className="rounded-full bg-gray-400 mt-1 ml-1 px-2 text-sm mr-1">
                        0
                      </span>
                    )}
                    <div>
                      {open && <CartModal openModal={open} setOpen={setOpen} />}
                    </div>
                  </div>
                </li>
              )}
              {isLoggedIn && user.role.includes("User") && (
                <li>
                  <Link
                    to="/wish-list"
                    className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                      location.pathname === "/wish-list"
                        ? "text-red-600"
                        : "text-black"
                    } md:border-0 md:hover:text-red-500 md:p-0 `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Wish List
                    {user.wishList.length > 0 ? (
                      <span className="rounded-full bg-gray-400  ml-1 px-2 text-sm mr-1">
                        {user.wishList.length}
                      </span>
                    ) : (
                      <span className="rounded-full bg-gray-400 mt-1 ml-1 px-2 text-sm mr-1">
                        0
                      </span>
                    )}
                  </Link>
                </li>
              )}
              {isLoggedIn && user.role.includes("User") && (
                <li>
                  <Link
                    to="/cart-details"
                    className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                      location.pathname === "/cart-details"
                        ? "text-red-600"
                        : "text-black"
                    } md:border-0 md:hover:text-red-500 md:p-0 `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-credit-card"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    Checkout
                  </Link>
                </li>
              )}
              {isLoggedIn && user.role.includes("Owner") && (
                <li>
                  <Link
                    to="/add-product"
                    className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm  ${
                      location.pathname === "/add-product"
                        ? "text-red-600"
                        : "text-black"
                    }  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Add Product
                  </Link>
                </li>
              )}
              {!isLoggedIn ? (
                <li>
                  <Link
                    to="/login"
                    className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm  ${
                      location.pathname === "/login"
                        ? "text-red-600"
                        : "text-black"
                    }  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <span
                    onClick={handleLogout}
                    className={` ${
                      location.pathname === "/logout"
                        ? "text-red-600"
                        : "text-black"
                    } hover:text-red-600 `}
                  >
                    Logout
                  </span>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <Link
                    to="/signup"
                    className={`flex flex-row item-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
                      location.pathname === "/signup"
                        ? "text-red-600"
                        : "text-black"
                    } md:border-0 md:hover:text-red-500 md:p-0 `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg>
                    Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-black p-4 ml-3 flex w-[99%] justify-around rounded-lg ">
        {/* <div className="text-base text-red-600 text-center font-medium">
          On Sale
        </div> */}
        <Link
          to={`/product/selection/Male`}
          className="text-base text-red-600 text-center font-medium hover:text-white"
        >
          Mens
        </Link>
        <Link
          to={`/product/selection/Female`}
          className="text-base text-red-600 text-center font-medium hover:text-white"
        >
          Womens
        </Link>
        <Link
          to={`/product/selection/Kids`}
          className="text-base text-red-600 text-center font-medium hover:text-white"
        >
          Kids
        </Link>
        {/* <Link className="text-base text-red-600 text-center font-medium hover:text-white">
          Payment Methods
        </Link> */}
      </div>
    </>
  );
};

export default Navbar;