import express from "express"
import userCreate from "./userCreate.js"
import userLogin from "./userLogin.js"
import userMe from "./userMe.js"
import userLogout from "./userLogout.js"
import userUpdateWishList from "./userUpdateWishList.js"
import userUpdateCart from "./userUpdateCart.js"

const userIndex = express.Router()

userIndex.post("/", userCreate)
userIndex.post("/login", userLogin)
userIndex.get("/me/:token", userMe)
userIndex.get("/logout/:token", userLogout)
userIndex.put("/wishlist/:id", userUpdateWishList)
userIndex.put("/cart/:id", userUpdateCart)


export default userIndex