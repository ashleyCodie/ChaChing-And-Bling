import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    token: "",
    avatar: "",
    role: "",
    contactNumber: "",
    cart: [],
    wishList: [],
  },
  // amount: 0,
  // totalAmount: 0,
  // totalPrice: 0,
};

export const authLogin = createAsyncThunk("auth/login", async (credentials) => {
  const { email, password } = credentials;
  const response = await authService.authLogin(email, password);
  return response.data;
});

export const checkLogin = createAsyncThunk("auth/checkLogin", async (token) => {
  const response = await authService.checkLogin(token);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const response = await authService.logout(token);
  return response.data;
});

export const updateUserWishList = createAsyncThunk(
  "auth/updateWishList",
  async (data) => {
    const { userId, item } = data;
    console.log(userId, item);
    const response = await authService.updateUserWishList(userId, item);
    return response.data;
  }
);

export const updateUserCart = createAsyncThunk(
  "auth/updateCart",
  async (data) => {
    const { userId, item } = data;
    console.log(userId, item);
    const response = await authService.updateUserCart(userId, item);
    return response.data;
  }
);

export const addUser = createAsyncThunk("auth/addUser", async (data) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    token,
    role,
    avatar,
    contactNumber,
    cart,
    wishList,
  } = data;

  const response = await authService.addUser(
    firstName,
    lastName,
    username,
    email,
    password,
    token,
    role,
    avatar,
    contactNumber,
    cart,
    wishList
  )
  return response.data
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToWishList(state, action) {
      console.log("addToWishList action.payload", action.payload);
      const productId = action.payload;
      try {
        // If item is already in wishlist
        const addItem = state.user.wishList.find(
          (product) => product.id === productId.id
        );
        // Add item to wishlist, if it's not in
        if (addItem) {
          state.user.wishList = state.user.wishList.filter(
            (product) => product.id !== productId.id
          );
        }
        // Add item to wishlist, if it's not in
        else {
          state.user.wishList.push({
            id: productId.id,
            price: productId.price,
            sizes: productId.sizes,
            image: productId.image,
            description: productId.description,
            productName: productId.productName,
          });
        }
      } catch (err) {
        return err;
      }
    },

    removeFromWishList(state, action) {
      const productId = action.payload;
      try {
        const removeItem = state.user.wishList.find(
          (product) => product.id === productId.id
        );
        if (removeItem.amount === 1) {
          state.user.wishList = state.user.wishList.filter(
            (product) => product.id !== productId.id
          );
        }
      } catch (err) {
        return err;
      }
    },

    updateUserCart(state, action) {
      const productId = action.payload;
      try {
        const addItem = state.user.cart.find(
          (product) =>
            product.id === productId.id 
        );
        if (addItem) {
          // addItem.amount++;
          // addItem.totalPrice += parseFloat(productId.price["$numberDecimal"]);
          // state.totalAmount++;
          // state.totalPrice =
          //   parseFloat(state.totalPrice) +
          //   parseFloat(productId.price["$numberDecimal"]);
          state.user.cart = state.user.cart.filter(
            (product) => product.id !== productId.id
          );
        } else {
          // const priceTotal =
          //   parseFloat(state.totalPrice) +
          //   parseFloat(productId.price["$numberDecimal"]);
          // state.user.cart.push({
          //   id: productId.id,
          //   price: productId.price,
          //   size: productId.size,
          //   amount: 1,
          //   image: productId.image,
          //   description: productId.description,
          //   totalPrice: priceTotal,
          //   productName: productId.productName,
          // });
          // state.totalAmount++;
          // state.totalPrice =
          //   parseFloat(state.totalPrice) +
          //   parseFloat(productId.price["$numberDecimal"]);
          state.user.cart.push({
            id: productId.id,
            price: productId.price,
            sizes: productId.size,
            image: productId.image,
            description: productId.description,
            productName: productId.productName,
          });
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const removeItem = state.user.cart.find(
          (product) =>
            product.id === productId.id && product.size === productId.size
        );
        if (removeItem.amount === 1) {
          state.user.cart = state.user.cart.filter(
            (product) =>
              product.id !== productId.id || product.size !== productId.size
          );
          state.totalAmount--;
          state.totalPrice -= productId.price["$numberDecimal"];
        } else {
          removeItem.amount--;
          removeItem.totalPrice -= productId.price["$numberDecimal"];
          state.totalAmount--;
          state.totalPrice -= productId.price["$numberDecimal"];
        }
      } catch (err) {
        return err;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(authLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
      })

      //checkLogin
      .addCase(checkLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.loading = false;
      })

      //logout
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = {
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          token: "",
        };
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      })

      //update user wishList
      .addCase(updateUserWishList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(updateUserWishList.rejected, (state, action) => {
        state.loading = false;
      })

      //update user Cart
      .addCase(updateUserCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(updateUserCart.rejected, (state, action) => {
        state.loading = false;
      })

          //Add New User
          .addCase(addUser.pending, (state, action) => {
            console.log("authSlice addUser.pending");
            state.loading = true;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            console.log("authSlice addUser.fulfilled");
            state.loading = false;
            state.user = action.payload.user;
          })
          .addCase(addUser.rejected, (state, action) => {
            console.log("authSlice addUser.rejected");
            state.loading = false;
          });
  },
});

export const { addToWishList, removeFromWishList, addToCart, removeFromCart } =
  authSlice.actions;
export default authSlice.reducer;