import mongoose from "mongoose";
import validator from "validator";

const FeedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, "Please provide a valid email."],
        },

        feedback: {
            type: String,
            required: [true, "Feedback is required"],
            minlength: [10, "Feedback should be at least 10 characters long"],
            maxlength: [
                1000,
                "Feedback should not be more than 1000 characters",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
