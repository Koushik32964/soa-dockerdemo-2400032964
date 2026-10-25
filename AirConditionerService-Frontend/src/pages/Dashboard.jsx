import { useEffect, useState } from "react";
import { getServices } from "../services/api";
import Feedback from "../components/Feedback";

function Dashboard() {
    const [services, setServices] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getServices()
            .then(setServices)
            .catch(err => setError(err.message));
    }, []);

    return (
        <>
            <h2 className="mb-4">Service Dashboard</h2>
            <Feedback message={error} type="danger" />

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Date</th>
                            <th>Cost</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.brand}</td>
                                <td>{s.serviceDate}</td>
                                <td>{s.serviceCost}</td>
                                <td>{s.completed ? "Completed" : "Pending"}</td>
                            </tr>
                        ))}
                        {services.length === 0 && !error && (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No service records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Dashboard;