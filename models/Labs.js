import mongoose, { model, Schema } from "mongoose";

const LabSchema = new Schema({
    labId: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    path: { type: String, required: true }
})

const Lab = mongoose.models.Lab || model("Lab", LabSchema)

export default Lab;