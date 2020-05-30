import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      id: Number,
      avatarUrl: String,
    },
    receiver: {
      id: Number,
      avatarUrl: String,
    },
    room: Number,
    content: String,
  },
  { timestamps: true }
);

export default MessageSchema;
