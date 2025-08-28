import mongoose, { mongo } from "mongoose";
const { model, Schema } = mongoose

const Userschema = new Schema({
    Email: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Profilepic: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: false
    },
    Score: {
        type: Number,
        default: 0
    }
})


const User = mongoose.models.User || model("User", Userschema);

export default User;