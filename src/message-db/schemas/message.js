import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    sender: Number,
    receiver: Number,
    room: Number,
    content: String,
  },
  { timestamps: true }
);

export default MessageSchema;
