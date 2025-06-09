import MessageModel from "../schemas/messageModel.js"



const messageCreate = async (req, res) => {

    let { messageDate, firstName, lastName,  email, phoneNumber, messageBody } = req.body
    console.log(messageDate, firstName, lastName,  email, phoneNumber, messageBody)
    console.log(messageDate, firstName, lastName,  email, phoneNumber, messageBody)

    if (
        (!messageDate) ||
        (!firstName) ||
        (!lastName) ||
        (!phoneNumber) || 
        (!email) ||
        (!messageBody)
      
    ) {
        console.log("Error: Message parameters are not valid.")
        res.status(500).send("Error: Message parameters are not valid.")
    }
    else {
        try {
            const message = await MessageModel.create({
                messageDate, firstName, lastName,  email, phoneNumber, messageBody
            })
            console.log("message", message)
            res.status(200).json({ "message": "Message has been Created.", message: message, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default messageCreate