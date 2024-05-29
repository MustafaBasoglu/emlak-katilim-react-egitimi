import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { mainRoutes, adminRoutes } from "./routes/routes.js";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <main className="container">
        <RouterProvider router={router} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
