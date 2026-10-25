const API_URL = "http://localhost:8080";

export async function getServices() {
    const response = await fetch(`${API_URL}/DisplayAll`);
    if (!response.ok) throw new Error("Failed to fetch records");
    return response.json();
}

export async function addService(data) {
    const response = await fetch(`${API_URL}/Add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Failed to add record");
    return response.json();
}

export async function updateService(id, data) {
    const response = await fetch(`${API_URL}/Update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Failed to update record");
    return response.json();
}

export async function deleteService(id) {
    const response = await fetch(`${API_URL}/Delete/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("Failed to delete record");
}