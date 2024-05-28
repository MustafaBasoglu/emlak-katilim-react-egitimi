import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";

function App() {

  return (
    <div className="app">
      <main className="container">
        <Header  />
        <HomePage />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
