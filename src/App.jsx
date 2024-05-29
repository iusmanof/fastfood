import Header from "../components/Header";

import FastFoodItem from "../components/FastFoodItem";
import "./App.css";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/couterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header />

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

export default App;
