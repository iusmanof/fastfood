import Header from "../components/Header";
import FastFoodItem from "../components/FastFoodItem";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Outlet, Link } from "react-router-dom";

const Food = ({ food }) => {
  const [foodState, setFoodState] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/fast-food")
      .then((response) => response.json())
      .then((data) => setFoodState(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />

      <Categories />
      <Sort />

      {/* {food.map((f) => (
          <li key={f.id}>
            <Link to={`/food/${f.id}`}>
              {f.title}
            </Link>
          </li>
        ))} */}

      <FastFoodBlock>
        {foodState.map((i) =>
          isLoading ? <FastFoodItemSkeleton /> : <FastFoodItem {...i} />
        )}
        <Outlet />
      </FastFoodBlock>
    </>
  );
};

export default Food;
