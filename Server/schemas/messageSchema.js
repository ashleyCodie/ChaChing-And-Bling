import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  messageDate: {
    type: Date,
    default: "",
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  messageBody: {
    type: String,
    default: "",
  },
});

export default messageSchema;