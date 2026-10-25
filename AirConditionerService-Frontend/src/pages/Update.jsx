import { useState } from "react";
import ServiceForm from "../components/ServiceForm";
import Feedback from "../components/Feedback";
import { getServices, updateService } from "../services/api";

function Update() {
    const [id, setId] = useState("");
    const [service, setService] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleFind(e) {
        e.preventDefault();
        setService(null);
        setMessage("");
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

    async function handleUpdate(data) {
        try {
            await updateService(id, data);
            setMessage("Service updated successfully!");
            setService(null);
            setId("");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <h2 className="mb-4">Update Service</h2>

            <form onSubmit={handleFind} className="mb-4">
                <label className="form-label">Enter existing Service ID</label>
                <div className="input-group">
                    <input
                        type="number"
                        min="1"
                        className="form-control"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary">Find Record</button>
                </div>
            </form>

            <Feedback message={message} />
            <Feedback message={error} type="danger" />

            {service && (
                <div className="card shadow-sm">
                    <div className="card-body">
                        <ServiceForm
                            key={service.id}
                            initialData={service}
                            onSubmit={handleUpdate}
                            buttonText="Save Changes"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Update;