import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="brand">
                    <div className="brand-icon">❄</div>
                    <div>
                        <h3>CoolCare</h3>
                        <span>SERVICE MANAGEMENT</span>
                    </div>
                </div>

                <p className="sidebar-label">WORKSPACE</p>

                <nav className="sidebar-nav">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                        <span>▦</span> Dashboard
                    </NavLink>

                    <NavLink to="/add" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                        <span>⊕</span> Add Service
                    </NavLink>

                    <NavLink to="/find" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                        <span>⌕</span> Find by ID
                    </NavLink>

                    <NavLink to="/update" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                        <span>▤</span> Update Service
                    </NavLink>

                    <NavLink to="/delete" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                        <span>♲</span> Delete Service
                    </NavLink>
                </nav>

                <div className="sidebar-note">
                    <div className="note-icon">✦</div>
                    <strong>Reliable service, happy customers.</strong>
                    <p>Keep every air conditioner service organized in one place.</p>
                </div>
            </aside>

            <div className="dashboard-main">
                <header className="topbar">
                    <span>Air Conditioner Service Management</span>
                    <div className="profile-icon">AC</div>
                </header>

                <main className="page-content">
                    <Outlet />
                </main>

                <footer className="dashboard-footer">
                    <span>●</span> Your service records are managed securely.
                </footer>
            </div>
        </div>
    );
}

export default Layout;
