import { useEffect } from "react"
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify";
import Main from "./components/Main";
import FilterItems from "./components/FilterItems";
import FilterGender from "./components/FilterGender";
import ProductDetail from "./pages/ProductDetail"
import ProductUpdate from "./pages/ProductUpdate"
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts"
import CartDetails from "./pages/CartDetails"
import WishList from "./pages/WishList"
import Payment from "./pages/Payment"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import ContactUs from "./pages/ContactUs"
import Inbox from "./pages/Inbox"
import Footer from "./components/Footer"
import PageNotFound from "./pages/PageNotFound"
import { checkLogin } from "./redux/authSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.token) {
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0];
        dispatch(checkLogin(loginToken));
      };
      checkToken();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:category" element={<FilterItems />} />
        <Route path="/product/selection/:gender" element={<FilterGender />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<ProductUpdate />} />
        <Route path="/cart-details" element={<CartDetails />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
