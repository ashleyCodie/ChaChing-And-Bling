import mongoose from "mongoose";
import ProductModel from "../schemas/productModel.js";

const productsGetManyCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await ProductModel.find({ category });
    res.status(200).json({ success: true, products: products });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default productsGetManyCategory;