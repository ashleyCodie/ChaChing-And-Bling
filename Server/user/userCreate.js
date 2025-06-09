import * as argon2 from "argon2"
import userModel from "../schemas/userModel.js"

const userCreate = async (req, res) => {
    const { firstName, lastName, email, username, password, avatar, role, contactNumber, cart, wishList } = req.body

    if(
        (!firstName || firstName == "") ||
        (!lastName || lastName == "") ||
        (!email || email == "") ||
        (!password || password == "") 
   
    ) {
      res.status(500).json({ "message": "User Information Not Valid" })  
    }
    else {
        const hashedPassword = await argon2.hash(password)
        const newUser = await userModel.create({ firstName, lastName, email, username, password: hashedPassword,  role, avatar, contactNumber, cart, wishList })
        console.log("newUser", newUser)
        res.status(200).json({ "success": true, "message": "User created Successfully" })
    }
}

export default userCreate