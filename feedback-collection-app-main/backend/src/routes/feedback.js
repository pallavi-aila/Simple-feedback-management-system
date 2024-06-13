import express from "express";
import { submitFeedback } from "../controllers/FeedbackController";

const routes = express.Router();

routes.post("/feedback", submitFeedback);

export default routes;
