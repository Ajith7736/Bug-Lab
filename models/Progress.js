import mongoose, { model, Schema } from "mongoose";

const ProgressSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    labId: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    CompletedAt: Date
})

const Progress = mongoose.models.Progress || model("Progress", ProgressSchema)

export default Progress;