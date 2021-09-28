import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";
import "./styles.css";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div className="counterBox">
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(subNumber(1))}>-</button>

        <button onClick={() => dispatch(addNumber(1))}>+</button>
      </div>
    </div>
  );
};

export default Counter;
