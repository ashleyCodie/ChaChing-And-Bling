import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./src/redux/productSlice"
import sliderReducer from "./src/redux/sliderSlice"
import cartReducer from "./src/redux/cartSlice"
import authReducer from "./src/redux/authSlice"
import messageReducer from "./src/redux/messageSlice"
import { listenerMiddleware } from "./src/redux/sessionStorageMiddleware";


const preloadedState = () => {
    if (sessionStorage.getItem("token") !== null) {
      return {
        auth: {
          loading: false,
          isLoggedIn: false,
          user: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            role: "",
            token: sessionStorage.getItem("token"),
            avatar: "",
            contactNumber: "",
            cart: [],
            wishList: []
          },
        },
      };
    }
    return undefined;
  };

export const store = configureStore({
    reducer: {
        products: productReducer,
        slider: sliderReducer,
        cart: cartReducer,
        auth: authReducer,
        message: messageReducer
    },
    preloadedState: preloadedState(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(listenerMiddleware.middleware),
})