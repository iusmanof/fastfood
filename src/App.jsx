import Header from "../components/Header";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import FastFoodItem from "../components/FastFoodItem";

import pizza1 from '../images/pizza1.jpg';
import burger1 from '../images/burger1.jpg';
import burger2 from '../images/burger2.jpg';
import burger3 from '../images/burger3.jpg';
import cola1 from '../images/cola1.jpg';
import fry1 from '../images/fry1.jpg';
import chicken1 from '../images/chicken1.jpg';
import popcorn1 from '../images/popcorn1.jpg';

import "./App.css";
import FastFoodBlock from "../components/FastFoodBlock";

function App() {
  return (
    <div>
      
      <Header isAllowed />
      <Categories />
      <Sort />

      <FastFoodBlock>
        <FastFoodItem title="Burger1" price={10} imgLink={burger1} />
        <FastFoodItem title="Pizza" price={2} imgLink={pizza1}/>
        <FastFoodItem title="Coca-cola" price={2} imgLink={cola1}/>
        <FastFoodItem title="Burger2" price={10} imgLink={burger2} />
        <FastFoodItem title="Fry1" price={2} imgLink={fry1}/>
        <FastFoodItem title="Burger3" price={10} imgLink={burger3} />
        <FastFoodItem title="Chicken1" price={10} imgLink={chicken1} />
        <FastFoodItem title="popcorn1" price={10} imgLink={popcorn1} />
      </FastFoodBlock>
    

    </div>
  );
}

export default App;
