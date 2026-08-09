import { Outlet } from "react-router-dom";
import AppSidebar from "../components/navigation/AppSidebar.jsx";
import "./MainLayout.css";
export default function MainLayout() {
  return (
    <div className="main-layout">

      <AppSidebar />

      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
}