import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  token: {
    type: [ String ]
  },
  avatar: {
    type: String,
    default: ""
  },
  role: String,
  contactNumber: {
    type: String,
    default: ""
  },
  cart: [],
  wishList: []
})
export default userSchema