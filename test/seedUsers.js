import "dotenv/config"
import axios from "axios"
import { generateFakeUsers } from "./generateFakeUsers.js"


const seedUsers = generateFakeUsers(1)
console.log("seedUsers", seedUsers)

seedUsers.forEach(async (user) => {
    const addUser = await axios.post(`${process.env.SERVER_URL}/users`, user)
    console.log("addUser", addUser.data)
})