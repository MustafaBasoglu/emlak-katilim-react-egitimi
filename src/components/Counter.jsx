import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Ahmet");

  //! component ilk yüklendiğinde bir kere çalışır!
  useEffect(() => {
    console.log("component ilk yüklendiğinde bir kere çalışır!");
  }, []);

  //! component ilk yüklendiğinde ve güncellendiğinde deps göre çalışır!
  useEffect(() => {
    console.log("component ilk yüklendiğinde ve güncellendiğinde deps göre çalışır!");
  }, [count, title]);

  return (
    <div className="counter">
      <p>{title}</p>
      <button onClick={() => setTitle("Mehmet")}>Change Title!</button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
