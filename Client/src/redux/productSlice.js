import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
// import { storeData } from "../data/fakeData"

const initialState = {
  loading: false,
  success: false,
  searchText: "",
  products: [
    {
      productName: "",
      description: "",
      category: "",
      brand: "",
      sizes: [],
      price: 0,
      gender: "",
      numberRemaining: "",
      image: "",
      rating: "",
    },
  ],
  product: {
    productName: "",
    description: "",
    category: "",
    brand: "",
    sizes: [],
    price: 0,
    gender: "",
    numberRemaining: "",
    image: "",
    rating: "",
  },
  // filteredItems: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  // singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
};

export const addProduct = createAsyncThunk("product/add", async (data) => {
  const {
    productName,
    description,
    category,
    brand,
    sizes,
    price,
    gender,
    numberRemaining,
    image,
    rating,
  } = data;

  const response = await productService.addProduct(
    productName,
    description,
    category,
    brand,
    sizes,
    price,
    gender,
    numberRemaining,
    image,
    rating
  );
  console.log(response.data);
  return response.data;
});
export const productList = createAsyncThunk("product/list", async () => {
  const response = await productService.productList();
  return response.data;
});

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  console.log("id", id);
  const response = await productService.getProduct(id);
  console.log(response.data);
  return response.data;
});

export const getCategory = createAsyncThunk(
    "product/category",
    async (category) => {
      console.log("category", category);
      const response = await productService.getCategory(category);
      console.log(response.data);
      return response.data;
    }
  );
  export const getGender = createAsyncThunk(
    "product/gender",
    async (gender) => {
      console.log("gender", gender);
      const response = await productService.getCategory(gender);
      console.log(response.data);
      return response.data;
    }
  );
  export const productUpdate = createAsyncThunk(
    "product/update",
    async (data) => {
        console.log("data", data)
      const response = await productService.productUpdate(data);
      console.log(response.data);
      return response.data;
    }
  );

  export const productDelete = createAsyncThunk("product/delete", 
    async (id) => {
        const response = await productService.productDelete(id)
        return response.data
    }
  )
  
  
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //add product
      .addCase(addProduct.pending, (state, action) => {
        console.log("addProduct.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        console.log("addProduct.fullfilled", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log("addProduct.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })

      //productList get all products
      .addCase(productList.pending, (state, action) => {
        console.log("productList.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(productList.fulfilled, (state, action) => {
        console.log("productList.fullfilled", action.payload);
        state.loading = true;
        state.products = action.payload.products;
        state.success = false;
      })
      .addCase(productList.rejected, (state, action) => {
        console.log("productList.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })

      //productGetOne
      .addCase(getProduct.pending, (state, action) => {
        console.log("getProduct.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log("getProduct.fullfilled", action.payload.product);
        state.loading = true;
        state.product = action.payload.product;
        state.success = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        console.log("getProduct.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })

         //productGetCategory
         .addCase(getCategory.pending, (state, action) => {
            console.log("getCategory.pending", action.payload);
            state.loading = true;
            state.success = false;
          })
          .addCase(getCategory.fulfilled, (state, action) => {
            console.log("getCategory.fullfilled", action.payload);
            state.loading = true;
            state.products = action.payload.products;
            state.success = false;
          })
          .addCase(getCategory.rejected, (state, action) => {
            console.log("getCategory.rejected", action.payload);
            state.loading = true;
            state.success = false;
          })

              //productGetGender
         .addCase(getGender.pending, (state, action) => {
            console.log("getGender.pending", action.payload);
            state.loading = true;
            state.success = false;
          })
          .addCase(getGender.fulfilled, (state, action) => {
            console.log("getGender.fullfilled", action.payload);
            state.loading = true;
            state.products = action.payload.products;
            state.success = false;
          })
          .addCase(getGender.rejected, (state, action) => {
            console.log("getGender.rejected", action.payload);
            state.loading = true;
            state.success = false;
          })

            //productUpdate
         .addCase(productUpdate.pending, (state, action) => {
            console.log("productUpdate.pending", action.payload);
            state.loading = true;
            state.success = false;
          })
          .addCase(productUpdate.fulfilled, (state, action) => {
            console.log("productUpdate.fullfilled", action.payload);
            state.loading = true;
            state.product = action.payload.product;
            state.success = false;
          })
          .addCase(productUpdate.rejected, (state, action) => {
            console.log("productUpdate.rejected", action.payload);
            state.loading = true;
            state.success = false;
          })

         //productDelete
         .addCase(productDelete.pending, (state, action) => {
            console.log("productDelete.pending", action.payload);
            state.loading = true;
            state.success = false;
          })
          .addCase(productDelete.fulfilled, (state, action) => {
            console.log("productDelete.fullfilled", action.payload);
            state.loading = true;
            state.product = action.payload;
            state.success = false;
          })
          .addCase(productDelete.rejected, (state, action) => {
            console.log("productDelete.rejected", action.payload);
            state.loading = true;
            state.success = false;
          })
  },
  
});

export const { searchText } = productSlice.actions;

export default productSlice.reducer;