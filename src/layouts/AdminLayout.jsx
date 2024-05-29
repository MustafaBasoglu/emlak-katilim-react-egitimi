import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Admin/Navbar";
import AdminSidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">
      <AdminSidebar />

      <div id="page-content-wrapper">
        <AdminNavbar />

        {/* content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
