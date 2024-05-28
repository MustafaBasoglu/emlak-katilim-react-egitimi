import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import Header from "./components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ])

  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <main className="container">
        <Header />
        <RouterProvider router={router} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
