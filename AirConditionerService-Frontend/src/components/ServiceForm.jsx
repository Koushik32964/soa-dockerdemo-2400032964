import { useEffect, useState } from "react";

function ServiceForm({ initialData, onSubmit, buttonText }) {
    const [brand, setBrand] = useState("");
    const [serviceDate, setServiceDate] = useState("");
    const [serviceCost, setServiceCost] = useState("");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setBrand(initialData?.brand || "");
        setServiceDate(initialData?.serviceDate || "");
        setServiceCost(initialData?.serviceCost ?? "");
        setCompleted(initialData?.completed ?? false);
    }, [initialData]);

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            brand,
            serviceDate,
            serviceCost: Number(serviceCost),
            completed
        });
    }

    return (
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
                    Service Completed
                </label>
            </div>

            <button className="btn btn-primary" type="submit">
                {buttonText}
            </button>
        </form>
    );
}

export default ServiceForm;