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
    }
})


export default mongoose.models.User || model("User", Userschema);