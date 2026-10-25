import { useState } from "react";
import { deleteService, getServices } from "../services/api";
import Feedback from "../components/Feedback";

function Delete() {
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleDelete(e) {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const services = await getServices();
            const found = services.some(s => String(s.id) === id);

            if (!found) {
                setError("Service record not found.");
                return;
            }

            if (!window.confirm(`Delete service record ${id}?`)) return;

            await deleteService(id);
            setMessage("Service deleted successfully.");
            setId("");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <h2 className="mb-4">Delete Service</h2>

            <Feedback message={message} />
            <Feedback message={error} type="danger" />

            <form onSubmit={handleDelete}>
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
                    <button className="btn btn-danger">Delete Service</button>
                </div>
            </form>
        </>
    );
}

export default Delete;