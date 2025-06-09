import mongoose from "mongoose";
import ProductModel from "../schemas/productModel.js";

const productsGetManyByGender = async (req, res) => {
  const { gender } = req.params;
  try {
    const products = await ProductModel.find({ gender });
    res.status(200).json({ success: true, products: products });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default productsGetManyByGender;