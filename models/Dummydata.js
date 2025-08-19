import mongoose from "mongoose";

const DummydataSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    }
})

const Dummydata = mongoose.models.Dummydata || mongoose.model("Dummydata",DummydataSchema)

export default Dummydata;