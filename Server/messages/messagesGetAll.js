import MessageModel from "../schemas/messageModel.js";

const messagesGetAll = async (req, res) => {
  try {
    const messages = await MessageModel.find();
    res.status(200).json({ success: true, messages: messages });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default messagesGetAll;