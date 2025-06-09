import express from "express"
import productCreate from "./productCreate.js"
import productsGetMany from "./productsGetMany.js"
import productsGetOne from "./productsGetOne.js"
import productsGetManyCategory from "./productsGetManyCategory.js"
import productsGetManyByGender from "./productsGetManyByGender.js"
import productUpdate from "./productUpdate.js"
import productDelete from "./productDelete.js"

const productIndex = express.Router()

productIndex.post("/addProduct", productCreate)
productIndex.get("/", productsGetMany)
productIndex.put("/update/:id", productUpdate)
productIndex.get("/:id", productsGetOne)
productIndex.get("/category/:category", productsGetManyCategory)
productIndex.get("/gender/:gender", productsGetManyByGender)
productIndex.delete("/:id", productDelete)

export default productIndex