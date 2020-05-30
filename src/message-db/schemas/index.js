import mongoose from 'mongoose';
import MessageSchema from './message';

const Message = mongoose.model('Message', MessageSchema);

export default { Message };
