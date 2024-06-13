import React, { useState } from "react";
import Modal from "./Modal";
import api from "../services/api";

const FeedbackForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await api.post("/feedback", {
                name: event.target.name.value,
                email: event.target.email.value,
                feedback: event.target.feedback.value,
            });

            setShowModal(true);

            // Clear form
            handleClearForm(event);
        } catch (error) {
            console.error(error);
            throw new Error("Error! Feedback not submitted: " + error.message);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleClearForm = (e) => {
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.feedback.value = "";
    };

    return (
        <>
            {showModal && <Modal handleCloseModal={handleCloseModal} />}
            <h1>Feedback Form</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label form="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        required
                    />

                    <label form="lname">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        required
                    />

                    <label form="feedback">Subject</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        placeholder="Write something.."
                        rows={10}
                        minLength={10}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default FeedbackForm;
