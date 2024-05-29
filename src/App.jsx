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
import Error404 from "./pages/Error404";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { fetchWithTimeout } from "./utils/fetchWithTimeout";
import AdminPage from "./pages/admin/AdminPage";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <Error404 />,
          loader: async () => {
            try {
              const res = await fetchWithTimeout(
                "https://jsonplaceholder.typicode.com/users",
                {},
                5000
              );
              const data = await res.json();

              if (res.ok) {
                return {
                  name: "Emin Başbayan",
                  users: data,
                };
              } else {
                throw new Error("Failed to fetch users");
              }
            } catch (err) {
              console.log(err);
              return err;
            }
          },
        },
        { path: "/products", element: <ProductsPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/product/:productId", element: <ProductDetailsPage /> },
        { path: "/admin", element: <AdminPage /> },
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
