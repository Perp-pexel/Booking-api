import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, require:true },
    password: { type: String, require:true }
});

export const UserModel = model('User', userSchema);