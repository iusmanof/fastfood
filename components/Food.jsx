import Header from "../components/Header";
import FastFoodItem from "../components/FastFoodItem";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Outlet, Link } from "react-router-dom";

const Food = ({ food }) => {
  const [foodState, setFoodState] = useState([{title: ''}]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const categoryParam = category ? category : "";
  const sortingParam = sorting ? sorting.replace("-", "") : "";
  const orderParam = sorting.includes("-") ? `desc` : "asc";

  useEffect(() => {
    fetch(
      `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}`
    )
      .then((response) => response.json())
      .then((data) => setFoodState(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category, sorting, searchValue]);

  const pizzasBLock = foodState
    .filter((obj) => {
      if (obj.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((i) =>
      isLoading ? <FastFoodItemSkeleton /> : <FastFoodItem {...i} />
    );
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Categories categoryHandler={setCategory} />
      <Sort sortingHandler={setSorting} />

      <FastFoodBlock>
        {pizzasBLock}
        <Outlet />
      </FastFoodBlock>
    </>
  );
};

export default Food;
