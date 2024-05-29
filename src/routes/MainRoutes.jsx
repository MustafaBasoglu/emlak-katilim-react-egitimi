import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import Error404 from "../pages/Error404";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/auth/LoginPage";
import { fetchWithTimeout } from "../utils/fetchWithTimeout";

export const mainRoutes = [
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
      { path: "/login", element: <LoginPage /> },
    ],
  },
];
