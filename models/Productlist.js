import mongoose, { model, models, Schema } from "mongoose";

const ProductlistSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    hidden: {
        type: Boolean,
        required: true
    }
})

const Productlist = models.Productlist || model("Productlist", ProductlistSchema);

export default Productlist;