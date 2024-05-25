import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [title, setTitle] = useState("Mehmet");

  let name = "Mehmet";
  console.log(name);

  function handleClick() {
    name = "Emin Başbayan";
    setTitle(name)
  }

  // Ekran
  return (
    <div className="app">
      <h1>Hello App</h1>
      <Counter />
    </div>
  );
}

export default App;
