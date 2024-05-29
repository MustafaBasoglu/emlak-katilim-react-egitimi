import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import Error404 from "../pages/Error404";
import AdminPage from "../pages/admin/AdminPage";
import AdminUsersPage from "../pages/admin/UsersPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
    ],
  },
];
