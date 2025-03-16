import mongoose, { Model, Document, Schema } from "mongoose";
import { authService } from "services/authServices";
import { StringDecoder } from "string_decoder";
// import { bcrypt } from "bcrypt";

export interface IUser extends Document {
  email: string;
  userName: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  userName: {
    type: String,
  
  },
  password: {
    type: String,
    required: true,
  },
});

export const User: Model<IUser> = mongoose.model("User", UserSchema);

// UserSchema.pre("save", function (next) {
//   try{
//   authService.encryptPassword(this.password);

// });
