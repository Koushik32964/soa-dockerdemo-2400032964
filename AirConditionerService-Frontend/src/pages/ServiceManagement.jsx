import { useEffect, useState } from "react";
import {
    getServices,
    addService,
    updateService,
    deleteService
} from "../services/api";

function ServiceManagement() {
    const [services, setServices] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [brand, setBrand] = useState("");
    const [serviceDate, setServiceDate] = useState("");
    const [serviceCost, setServiceCost] = useState("");
    const [completed, setCompleted] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function loadServices() {
        try {
            setServices(await getServices());
            setError("");
        } catch {
            setError("Cannot connect to backend on port 8080.");
        }
    }

    useEffect(() => {
        loadServices();
    }, []);

    function resetForm() {
        setEditingId(null);
        setBrand("");
        setServiceDate("");
        setServiceCost("");
        setCompleted(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const service = {
            brand,
            serviceDate,
            serviceCost: Number(serviceCost),
            completed
        };

        try {
            if (editingId !== null) {
                await updateService(editingId, service);
                setMessage("Service updated successfully!");
            } else {
                await addService(service);
                setMessage("Service added successfully!");
            }

            resetForm();
            await loadServices();
        } catch (err) {
            setError(err.message);
        }
    }

    function handleEdit(service) {
        setEditingId(service.id);
        setBrand(service.brand);
        setServiceDate(service.serviceDate);
        setServiceCost(service.serviceCost);
        setCompleted(service.completed);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    async function handleDelete(id) {
        if (!window.confirm("Are you sure you want to delete this record?")) {
            return;
        }

        try {
            await deleteService(id);
            setMessage("Service deleted successfully!");

            if (editingId === id) resetForm();

            await loadServices();
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">
                Air Conditioner Service Management
            </h2>

            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                    {editingId !== null ? "Update Service" : "Add Service"}
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Brand</label>
                            <input
                                className="form-control"
                                value={brand}
                                onChange={e => setBrand(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Service Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={serviceDate}
                                onChange={e => setServiceDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Service Cost</label>
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                className="form-control"
                                value={serviceCost}
                                onChange={e => setServiceCost(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-check mb-3">
                            <input
                                id="completed"
                                type="checkbox"
                                className="form-check-input"
                                checked={completed}
                                onChange={e => setCompleted(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="completed">
                                Completed
                            </label>
                        </div>

                        <button className="btn btn-primary me-2" type="submit">
                            {editingId !== null ? "Update" : "Add"}
                        </button>

                        {editingId !== null && (
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={resetForm}
                            >
                                Cancel
                            </button>
                        )}
                    </form>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                    Service Records
                </div>

                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Brand</th>
                                <th>Date</th>
                                <th>Cost</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {services.map(service => (
                                <tr key={service.id}>
                                    <td>{service.id}</td>
                                    <td>{service.brand}</td>
                                    <td>{service.serviceDate}</td>
                                    <td>{service.serviceCost}</td>
                                    <td>
                                        {service.completed ? "Completed" : "Pending"}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2 mb-1"
                                            onClick={() => handleEdit(service)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger mb-1"
                                            onClick={() => handleDelete(service.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {services.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No service records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ServiceManagement;