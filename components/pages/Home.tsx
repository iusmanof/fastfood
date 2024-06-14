import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/couterSlice";
import React from "react";

interface HomeSelectorProps {
  counter: any
}

const Home: React.FC = () => {
  const count = useSelector((state: HomeSelectorProps) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Home</h1>
      <div>
        <span>{count}</span>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
