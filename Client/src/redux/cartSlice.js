import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0, 
    totalAmount: 0, 
    totalPrice: 0, 
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const addItem = state.cart.find(product => product.id === productId.id && product.size === productId.size);
        if (addItem) {
          addItem.amount++;
          addItem.totalPrice += parseFloat(productId.price["$numberDecimal"]);
          state.totalAmount++;
          state.totalPrice = parseFloat(state.totalPrice) + parseFloat(productId.price["$numberDecimal"]);
        }
        else {
          const priceTotal = parseFloat(state.totalPrice) + parseFloat(productId.price["$numberDecimal"]);
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            image: productId.image,
            description: productId.description,
            totalPrice: priceTotal,
            productName: productId.productName,
          });
          state.totalAmount++;
          state.totalPrice = parseFloat(state.totalPrice) + parseFloat(productId.price["$numberDecimal"]);
        }

      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const removeItem = state.cart.find(
          (product) =>
            product.id === productId.id && 
            product.size === productId.size
        );
        if (removeItem.amount === 1) {
          state.cart = state.cart.filter(
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
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;