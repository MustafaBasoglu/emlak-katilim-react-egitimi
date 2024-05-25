import { useState } from "react";

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
      <p id="paragraph">{title}</p>
      <button id="btn" onClick={handleClick}>
        İsmi değiştir!
      </button>
    </div>
  );
}

export default App;
