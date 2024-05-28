import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },
  ]);

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
