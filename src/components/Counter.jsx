import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "../redux/slices/counterSlice";

function Counter() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(arttir({ number: 10 }))}>+</button>
      <strong>{state.count}</strong>
      <button onClick={() => dispatch(azalt())}>-</button>
    </div>
  );
}

export default Counter;
