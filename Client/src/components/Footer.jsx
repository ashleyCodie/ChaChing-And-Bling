import { Link } from "react-router"

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-red-600 rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                ChaChing&Bling
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-red-600 sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-red-600 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-red-600 sm:text-center ">
            © 2025{" "}
            <a href="/" className="hover:underline">
              ChaChing&Bling™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;