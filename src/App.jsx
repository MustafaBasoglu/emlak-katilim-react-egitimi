import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import { useState } from "react";

function App() {
   const [cartItems, setCartItem] =  useState([]);

  return (
    <div className="app">
      <main className="container">
        <Header cartItems={cartItems} />
        <HomePage setCartItem={setCartItem} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
