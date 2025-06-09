import ProductModel from "../schemas/productModel.js"

const productsGetAll = async (req, res) => {
   try {
        const products = await ProductModel.find()
        res.status(200).json({"success": true, "products": products})  
    
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
      }
}
export default productsGetAll