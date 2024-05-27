import Header from "../components/Header";
import FastFoodItem from "../components/FastFoodItem";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";

export const SearchContext = React.createContext({});

const Food = () => {
  const [foodState, setFoodState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const categoryParam = category ? category : "";
  const sortingParam = sorting ? sorting.replace("-", "") : "";
  const orderParam = sorting.includes("-") ? "desc" : "asc";
  const pageParam = page;
  const perPageParam = 2;

  useEffect(() => {
    fetch(
      `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
      // `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}`
    )
      .then((response) => response.json())
      .then((data) => setFoodState(data.data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category, sorting, searchValue, page]);

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
    <div>
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <Categories categoryHandler={setCategory} />
        <Sort sortingHandler={setSorting} />
        <FastFoodBlock>
          {pizzasBLock}
          <Outlet />
        </FastFoodBlock>
        <Pagination setPage={setPage} />
      </SearchContext.Provider>
    </div>
  );
};

export default Food;
