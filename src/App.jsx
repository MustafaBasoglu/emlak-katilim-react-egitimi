import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
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
        <HomePage />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
