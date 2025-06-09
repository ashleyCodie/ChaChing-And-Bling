
import ProductModel from "../schemas/productModel.js"

const productsGetOne = async (req, res) => {
    let {id} = req.params
    console.log("id", id)

    try {
        const product = await ProductModel.findById(id)
        res.status(200).json({"success": true, "product": product})  
        console.log("product", product)
    
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
      }
}

export default productsGetOne