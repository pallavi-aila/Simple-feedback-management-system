import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const mongoDBConnection = async () => {
    console.info("connecting...");

    try {
        console.warn("Attempting MongoDB URI: " + MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.info(`Database connected successfully`);
    } catch (err) {
        console.error(err);
        console.error("Connection refused");
    }
};

export default mongoDBConnection;
