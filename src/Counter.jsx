import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   function arttir() {
  //     setCount(count + 1);
  //   }

  //   function azalt(){
  //     if(count === 0){
  //         return;
  //     }
  //     setCount(count - 1);
  //   }

  function handleClick(params) {
    if (params === "+") {
      setCount(count + 1);
    } else {
      if (count === 0) return;
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <button onClick={() => handleClick("+")}>+</button>
      <strong>{count}</strong>
      <button onClick={() => handleClick("-")}>-</button>
    </div>
  );
}

export default Counter;
