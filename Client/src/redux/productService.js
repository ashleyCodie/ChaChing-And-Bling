import axios from "axios";

const productService = {
  addProduct: async (
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
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/addProduct`,
      {
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
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  productList: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/`
    )
  },
  getProduct: async (id) => {
    console.log("id", id)
    return await axios.get(
        `${import.meta.env.VITE_NODE_SERVER_URL}/product/${id}`,
        { headers: { "Content-Type": "application/json" } }
    )
},
getCategory: async (category) => {
  console.log("category", category)
  return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/category/${category}`,
      { headers: { "Content-Type": "application/json" } }
  )
},
getGender: async (gender) => {
  console.log("gender", gender)
  return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/gender/${gender}`,
      { headers: { "Content-Type": "application/json" } }
  )
},
productUpdate: async (product) => {
  console.log("product", product)
  return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/update/${product.id}`,
      product,
      { headers: { "Content-Type": "application/json" } }
  )
},
productDelete: async (id) => {
  console.log("id", id)
  return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/product/${id}`,
      { headers: { "Content-Type": "application/json" } }
  )
},
};

export default productService