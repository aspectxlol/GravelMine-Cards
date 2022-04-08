import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
    user: {
        username: String,
        userId: Number,
        GMCId: String,
        avatar: String
    }
})

export default model('user', userSchema)