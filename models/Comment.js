import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
})

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);




export default Comment;