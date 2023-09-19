import mongoose from "mongoose";

const adminShema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    addMovies: [
        {
            type: String,
        },
    ],
});

export default mongoose.model("Admin", adminShema);