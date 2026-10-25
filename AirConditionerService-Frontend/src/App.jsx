import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import Find from "./pages/Find";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add" element={<Add />} />
                    <Route path="find" element={<Find />} />
                    <Route path="update" element={<Update />} />
                    <Route path="delete" element={<Delete />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;