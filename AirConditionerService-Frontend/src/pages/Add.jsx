import { useState } from "react";
import ServiceForm from "../components/ServiceForm";
import Feedback from "../components/Feedback";
import { addService } from "../services/api";

function Add() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleAdd(data) {
        try {
            setError("");
            await addService(data);
            setMessage("Air conditioner service added successfully!");
        } catch (err) {
            setError(err.message || "Unable to add service.");
        }
    }

    return (
        <>
            <div className="page-heading">
                <h1>Register a Service</h1>
                <p>Add a new air conditioner service using the details below.</p>
            </div>

            <Feedback message={message} />
            <Feedback message={error} type="danger" />

            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-center gap-3">
                        <div className="brand-icon">❄</div>
                        <div>
                            <div>Register a new service</div>
                            <small className="text-secondary">
                                Enter the details to register your service record.
                            </small>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="mb-4">
                        <strong style={{ fontSize: "12px" }}>
                            01 &nbsp; Service details
                        </strong>
                        <p className="text-secondary mt-1 mb-0"
                           style={{ fontSize: "11px" }}>
                            Basic information about the air conditioner service
                        </p>
                    </div>

                    <ServiceForm
                        onSubmit={handleAdd}
                        buttonText="Add Service"
                    />

                    <div className="mt-4 pt-3 border-top text-secondary"
                         style={{ fontSize: "10px" }}>
                        <span style={{ color: "#49b89a" }}>●</span>
                        &nbsp; Your service details will be saved to the backend database.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;
