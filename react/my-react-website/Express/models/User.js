
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  AdminName: { type: String, required: true,unique:true },
  AdminMail: { type: String, required: true, unique: true },
  Password: { type: String, required: true }
});

const User = mongoose.model('UsersData', userSchema);

export default User;
