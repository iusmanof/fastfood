import Header from "../components/Header";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import FastFoodItem from "../components/FastFoodItem";

import "./App.css";

function App() {
  return (
    <div>
      <Header isAllowed />
      <Categories />
      <Sort />

      <FastFoodItem title="Burger" price={10} />
      <FastFoodItem title="Pizza" price={2}/>
      <FastFoodItem title="Coca-cola" price={2}/>
      <FastFoodItem title="Sprite" price={2}/>
    </div>
  );
}

export default App;
