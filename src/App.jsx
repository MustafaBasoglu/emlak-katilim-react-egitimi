import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <main className="container">
        <HomePage />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
