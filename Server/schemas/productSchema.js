import mongoose from "mongoose"

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    },
    brand: {
      type: String,
      default: ""
    },
    sizes: [String],
    price: Schema.Types.Decimal128,
    gender: {
      type: String,
      default: ""
    },
    numberRemaining: Number,
    image: {
      type: String,
      default: ""
    },
    rating: Schema.Types.Decimal128,
})
export default productSchema