import { useState } from "react";
import { getServices } from "../services/api";
import Feedback from "../components/Feedback";

function Find() {
    const [id, setId] = useState("");
    const [service, setService] = useState(null);
    const [error, setError] = useState("");

    async function handleFind(e) {
        e.preventDefault();
        setService(null);
        setError("");

        try {
            const services = await getServices();
            const found = services.find(s => String(s.id) === id);

            if (found) {
                setService(found);
            } else {
                setError("Service record not found.");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <h2 className="mb-4">Find Service</h2>

            <form onSubmit={handleFind} className="mb-4">
                <label className="form-label">Service ID</label>
                <div className="input-group">
                    <input
                        type="number"
                        min="1"
                        className="form-control"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary">Find</button>
                </div>
            </form>

            <Feedback message={error} type="danger" />

            {service && (
                <div className="card">
                    <div className="card-body">
                        <h5>Service ID: {service.id}</h5>
                        <p>Brand: {service.brand}</p>
                        <p>Date: {service.serviceDate}</p>
                        <p>Cost: {service.serviceCost}</p>
                        <p>Status: {service.completed ? "Completed" : "Pending"}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Find;