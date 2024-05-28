import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./context/CartProvider";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CartProvider>
);
