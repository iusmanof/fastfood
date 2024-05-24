import Header from "../components/Header";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import FastFoodItem from "../components/FastFoodItem";
import "./App.css";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import { useEffect, useState } from "react";

function App() {
  const [foodState, setFoodState] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    fetch("http://localhost:3000/fast-food")
      .then((response) => response.json())
      .then((data) => setFoodState(data));
    
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  
  }, []);

  return (
    <div>
      <Header />
      <Categories />
      <Sort />

      <FastFoodBlock>
        {foodState.map((i) => (
          isLoading ? <FastFoodItemSkeleton /> : <FastFoodItem {...i} />
        ))}
      </FastFoodBlock>
    </div>
  );
}

export default App;
