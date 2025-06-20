import mongoose from "mongoose"

const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
    },
    message: {
        type: String,
        required: [true, "Please provide your message"],
    },
    sendDate: {
        type: String,
        default: ""
    }
})

const Msg = mongoose.models.Msg || mongoose.model("Msg", msgSchema)

export default Msg