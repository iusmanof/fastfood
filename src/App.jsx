import Header from "../components/Header";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import FastFoodItem from "../components/FastFoodItem";
import "./App.css";
import FastFoodBlock from "../components/FastFoodBlock";
import { useEffect, useState } from "react";

function App() {
  const [foodState, setFoodState] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:3000/fast-food")
      .then((response) => response.json())
      .then((data) => setFoodState(data));
  }, []);

  return (
    <div>
      {/* <Header isAllowed /> */}
      <Categories />
      <Sort />

      <FastFoodBlock>
        {foodState.map((i) => (
          <FastFoodItem title={i.title} price={i.price} imgLink={i.imgLink} />
        ))}
      </FastFoodBlock>
    </div>
  );
}

export default App;
