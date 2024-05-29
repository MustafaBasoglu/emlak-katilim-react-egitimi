import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "./context/ThemeContext";
import { mainRoutes, adminRoutes } from "./routes/routes.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <main className="container">
        <RouterProvider router={router} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
