import ProductModel from "../schemas/productModel.js"

const productUpdate = async (req, res) => {
    const { id } = req.params
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
      } = req.body;
    
      console.log(
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

      if (
        !productName ||
        !description||
        !category ||
        !brand ||
        !price ||
        !numberRemaining 
      ) {
        console.log("Error: Product parameters are not valid.");
        res.status(500).send("Error: Product parameters are not valid.");
      }
      else {
        try {
            const product = await ProductModel.findOneAndUpdate({"_id": id}, {
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
              }
              );
             
              console.log("product", product);
              res
                .status(200)
                .json({ message: "Product has been Created.", product: product, success: true });
            } catch (err) {
              console.log(err);
              res.status(500).send(err);
            }
          }
        }
      



export default productUpdate