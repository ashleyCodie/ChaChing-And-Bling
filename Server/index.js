import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import productIndex from "./products/productIndex.js"
import userIndex from "./user/userIndex.js"
import messageIndex from "./messages/messageIndex.js"

const app = express()
app.use(express.json())
app.use(cors())
const port = 8080

app.get("/", (req, res) => {
    res.send( "Hello World" )
})

app.use("/product", productIndex)
app.use("/users", userIndex)
app.use("/messages", messageIndex)

// app.all("*", (req, res) => {
//     res.status(404).json({
//         success: false,
//         data: "404"
//     })
// })

try {
    const mongoURL = process.env.MONGODB_URL || ""
      await mongoose.connect(mongoURL)
      console.log(`Connected to MongoDB at ${mongoURL}`)
    
      app.listen(port, () => {
          console.log(`Redux Toolkit Shopping App listening on port ${port}`)
      })
    } 
    catch(err) {
        console.log(err)
    }