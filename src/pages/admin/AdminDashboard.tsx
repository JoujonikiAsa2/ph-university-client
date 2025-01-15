import { Outlet } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h1>
        <Outlet />
      </h1>
    </div>
  );
};

export default AdminDashboard;
